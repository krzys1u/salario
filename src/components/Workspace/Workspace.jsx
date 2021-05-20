import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { Error as ErrorComponent } from '../Error/Error'
import { Diagram } from '../Diagram/Diagram'
import { EmptyFilters } from '../EmptyFilters/EmptyFilters'
import { withDebug } from '../../utils/withDebug'
import { API_URL } from '../../config'
import { MEASURES, EMPLOYMENT_TYPES } from '../../const'

const prepareParam = (name, value) => {
  if (!Array.isArray(value)) {
    return [name, value]
  }

  return [value.map((entry) => [name, entry].join('=')).join('&')]
}

const prepareQueryParams = (params) => {
  return Object.keys(params)
    .map((param) => prepareParam(param, params[param]).join('='))
    .join('&')
}

const fetchSalaryData = async (params) => {
  const url = `${API_URL}/api/salary?${prepareQueryParams(params)}`

  const response = await fetch(url, params)

  const { data } = await response.json()

  return data
}

const areFiltersEmpty = ({ types, measures }) =>
  !Object.keys(types).filter((key) => !!types[key]).length ||
  !Object.keys(measures).filter((key) => !!measures[key]).length

const fetchData = async (queryKey) => {
  const {
    queryKey: [, types, from, to],
  } = queryKey

  return await fetchSalaryData({
    types: Object.keys(types).filter((key) => !!types[key]),
    from,
    to,
  })
}

const prepareData = ({ types, measures }, data) => {
  const dataSeries = {}
  const dataPoints = {}

  const getLabel = (entries, key) =>
    entries.find((entry) => entry.name === key).label

  const getDataPointLabel = (measure, type) =>
    `${getLabel(MEASURES, measure)} (${getLabel(EMPLOYMENT_TYPES, type)})`

  const range = []

  data.forEach((dataPoint) => {
    Object.keys(measures)
      .filter((key) => !!measures[key])
      .forEach((measure) => {
        const { type, gross } = dataPoint
        const label = getDataPointLabel(measure, type)

        if (!range[0] || gross < range[0]) {
          range[0] = gross
        }

        if (!range[1] || gross > range[1]) {
          range[1] = gross
        }

        if (!dataSeries[label]) {
          dataSeries[label] = []
        }

        if (!dataPoints[gross]) {
          dataPoints[gross] = []
        }

        dataPoints[gross].push([label, dataPoint[measure]])

        dataSeries[label].push({
          x: gross,
          y: dataPoint[measure],
          label,
        })
      })
  })

  return {
    dataSeries: Object.keys(dataSeries).map((key) => ({
      label: key,
      data: dataSeries[key],
    })),
    dataPoints,
    range,
  }
}

export const Workspace = withDebug(function Workspace({ filters }) {
  const filtersEmpty = areFiltersEmpty(filters)

  const { isError, error, refetch, data } = useQuery(
    ['data', filters.types, filters.from, filters.to],
    fetchData,
    {
      enabled: !filtersEmpty,
    },
  )

  const errorClick = useCallback(() => {
    refetch({ throwOnError: false })
  }, [refetch])

  if (!data || filtersEmpty) {
    return <EmptyFilters />
  }

  if (isError && error) {
    return <ErrorComponent error={error} onClick={errorClick} />
  }

  const { dataSeries, dataPoints, range } = prepareData(filters, data)

  return (
    <Diagram
      filters={filters}
      dataSeries={dataSeries}
      dataPoints={dataPoints}
      dataRange={range}
    />
  )
})
