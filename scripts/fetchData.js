const fetch = require('node-fetch')

const {
  SALARY_MIN,
  SALARY_MAX,
  SALARY_STEP,
  CREATIVE_RIGHTS_STEPS,
} = require('../src/config')

const ENDPOINT = 'https://api.bankier.pl/calculators/salary/calculate/uop'

const BEFORE_2022 = 0
const NEW_DEAL = 1

const HIGH_ZUS = [1457.49, 1211.28]
const LOW_ZUS = [627.01, 263.59]
const INCOME_TAX_PERCENTAGE = [0.19, 0.239]

const BATCH_SIZE = 100

let results = []

let toRetry = []

let fetched = 0
let fetchedBatches = 0

const printReport = () => {
  console.info('\t Fetched: ', fetched)
  console.info('\t toRetry: ', toRetry.length)
}

const round = (number) => {
  const rounded = Math.round(number * 100 + Number.EPSILON) / 100 + ''

  const dotPosition = rounded.indexOf('.')

  return dotPosition === -1
    ? parseInt(rounded)
    : parseFloat(rounded.slice(0, dotPosition + 3))
}

const getMin = (array, compareKey) =>
  round(
    array.sort((first, second) => first[compareKey] - second[compareKey])[0][
      compareKey
    ],
  )

const getMax = (array, compareKey) =>
  round(
    array.sort((first, second) => second[compareKey] - first[compareKey])[0][
      compareKey
    ],
  )

const getAvg = (array, key) =>
  round(
    array.reduce((acc, monthData) => acc + monthData[key], 0) / array.length,
  )

const parseSalaryData = (salaryData, creativeRightsValue, suffix = '') => ({
  gross: salaryData.koszty[0].kwota_brutto,
  nettoMin: getMin(salaryData.koszty, 'kwota_netto'),
  nettoMax: getMax(salaryData.koszty, 'kwota_netto'),
  nettoAvg: getAvg(salaryData.koszty, 'kwota_netto'),
  nettoSum: salaryData.podsumowanie.suma_kwota_netto,
  taxMin: round(
    salaryData.koszty[0].kwota_brutto -
      getMin(salaryData.koszty, 'kwota_netto'),
  ),
  taxMax: round(
    salaryData.koszty[0].kwota_brutto -
      getMax(salaryData.koszty, 'kwota_netto'),
  ),
  taxAvg: round(
    salaryData.koszty[0].kwota_brutto -
      getAvg(salaryData.koszty, 'kwota_netto'),
  ),
  taxSum: round(
    salaryData.podsumowanie.suma_pracodawca_koszt_calkowity -
      salaryData.podsumowanie.suma_kwota_netto,
  ),
  costs: {
    min: getMin(salaryData.koszty, 'pracodawca_koszt_calkowity'),
    max: getMax(salaryData.koszty, 'pracodawca_koszt_calkowity'),
    avg: getAvg(salaryData.koszty, 'pracodawca_koszt_calkowity'),
    sum: salaryData.podsumowanie.suma_pracodawca_koszt_calkowity,
  },
  type: `uop-${creativeRightsValue}${suffix}`,
})

const prepareB2bLineData = (brutto, zus, variant, suffix = '') => ({
  gross: brutto,
  nettoMin: round(brutto * (1 - INCOME_TAX_PERCENTAGE[variant]) - zus[variant]),
  nettoMax: round(brutto * (1 - INCOME_TAX_PERCENTAGE[variant]) - zus[variant]),
  nettoAvg: round(brutto * (1 - INCOME_TAX_PERCENTAGE[variant]) - zus[variant]),
  nettoSum:
    round(brutto * (1 - INCOME_TAX_PERCENTAGE[variant]) - zus[variant]) * 12,
  taxMin: null,
  taxMax: null,
  taxAvg: null,
  taxSum: null,
  type: `b2b-${zus === LOW_ZUS ? 'low-zus' : 'high-zus'}${suffix}`,
})

const fetchData = async (year, brutto, creativeRightsPercent = 0) => {
  const response = await fetch(ENDPOINT, {
    method: 'post',
    body: JSON.stringify({
      kwota: brutto,
      rok_podatkowy: year,
      ppk_procent_pracodawca: 1.5,
      ppk_procent_lacznie: 1.5,
      procent_kosztow_autorskich: creativeRightsPercent,
      procent_pracodawca_wypadkowe: 1.67,
      czy_kwota_brutto: 1,
      czy_mlody: 0,
      czy_oswiadczenie_pobieranie_pit_mlody: 0,
      czy_oswiadczenie_niepobieranie_drugi_prog: 0,
      praca_poza_miejscem_zamieszkania: 0,
      czy_kwota_wolna: 1,
      czy_ulga_klasa_srednia: 1,
      czy_fp: 1,
      czy_fgsp: 1,
      czy_ppk: 0,
      kwoty_brutto: [],
      czy_fp_bez_limitu: 1,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

const bruttoValues = Array.from(
  new Array(1 + (SALARY_MAX - SALARY_MIN) / SALARY_STEP),
).map((_, index) => SALARY_MIN + index * SALARY_STEP)

const bruttoWithCreativeRights = bruttoValues.flatMap((brutto) =>
  CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => {
    return { brutto, creativeRightsValue }
  }),
)

const fetchBatch = (year, batch) =>
  batch.map(({ brutto, creativeRightsValue }) =>
    fetchData(year, brutto, creativeRightsValue)
      .then((data) => ({
        ...data,
        meta: {
          brutto,
          creativeRightsValue,
          ok: true,
        },
      }))
      .catch(() => {
        return {
          meta: {
            ok: false,
            brutto,
            creativeRightsValue,
          },
        }
      }),
  )

const parseBatch = async (batch, suffix = '') => {
  for await (let data of batch) {
    const { ok, brutto, creativeRightsValue } = data.meta

    if (!ok) {
      toRetry.push({
        brutto: brutto,
        creativeRightsValue: creativeRightsValue,
      })
      continue
    }

    results.push(parseSalaryData(data, creativeRightsValue, suffix))

    fetched++
  }
}

const prepareBatches = (data) => {
  const count = Math.ceil(data.length / BATCH_SIZE)

  return Array.from(new Array(count)).map((_, index) =>
    data.slice(index * BATCH_SIZE, index * BATCH_SIZE + BATCH_SIZE),
  )
}

let batches = prepareBatches(bruttoWithCreativeRights)

module.exports = async (year, suffix = '') => {
  console.info(`Fetching data for year ${year} with suffix="${suffix}"`)

  results = []
  toRetry = []
  fetched = 0
  fetchedBatches = 0

  batches = prepareBatches(bruttoWithCreativeRights)

  do {
    toRetry = []

    for await (let batch of batches) {
      const batchId = ++fetchedBatches

      console.clear()
      console.info(
        `Start fetching of batch number ${batchId}/${batches.length}`,
      )

      const data = await fetchBatch(year, batch)
      await parseBatch(data, suffix)

      printReport()

      console.info(`Batch number ${batchId} has been fetched`)
      console.info('---')
    }

    console.info('Data to refetch', toRetry.length)
    console.info('---')

    fetchedBatches = 0

    batches = prepareBatches(toRetry)
  } while (toRetry.length !== 0)

  bruttoValues.forEach((brutto) => {
    results.push(
      prepareB2bLineData(
        brutto,
        HIGH_ZUS,
        suffix.length ? NEW_DEAL : BEFORE_2022,
        suffix,
      ),
    )
    results.push(
      prepareB2bLineData(
        brutto,
        LOW_ZUS,
        suffix.length ? NEW_DEAL : BEFORE_2022,
        suffix,
      ),
    )
  })

  const employerCost = results
    .filter(({ type }) => type === `uop-0${suffix}`)
    .map((data) => ({
      ...data,
      type: `uop-employer-cost${suffix}`,
      nettoMin: data.costs.min,
      nettoMax: data.costs.max,
      nettoAvg: data.costs.avg,
      nettoSum: data.costs.sum,
      taxMin: null,
      taxMax: null,
      taxAvg: null,
      taxSum: null,
    }))

  console.log('Data has been prepared')

  return [...results, ...employerCost]
}
