import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import Slider from '@material-ui/core/Slider'

import { useTranslation } from '../../contexts'
import { SALARY_MAX, SALARY_MIN, SALARY_SLIDER_STEP } from '../../config'

const MIN_SLIDER = SALARY_MIN
const MAX_SLIDER = SALARY_MAX
const STEP = SALARY_SLIDER_STEP

export const FilterSliders = ({ from, to, onChange, setSubmitEnabled }) => {
  const { translations } = useTranslation()

  return (
    <>
      <FormLabel component="legend">{translations.salaryRangesLabel}</FormLabel>

      <Slider
        value={[from, to]}
        valueLabelDisplay="auto"
        onChange={onChange}
        onChangeCommitted={() => {
          setSubmitEnabled(true)
        }}
        aria-labelledby="input-slider"
        min={MIN_SLIDER}
        max={MAX_SLIDER}
        step={STEP}
      />
    </>
  )
}
