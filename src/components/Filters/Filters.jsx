import React, { useCallback, useState } from 'react'
import { Button } from '@material-ui/core'

import { SALARY_MIN, SALARY_MAX, SALARY_SLIDER_STEP } from '../../config'

import { FilterInputs } from './FilterInputs'
import { FilterSliders } from './FilterSliders'
import { FiltersCheckboxes } from './FiltersCheckboxes'

import { useTranslation } from '../../contexts'

import { withDebug } from '../../utils/withDebug'

const MIN_SLIDER = SALARY_MIN
const MAX_SLIDER = SALARY_MAX

const applyUpdatedRanges = (state, which, newVal, checkValues) => {
  const newState = { ...state, [which]: newVal }

  if (checkValues) {
    if (newState.to < newState.from && which === 'from') {
      newState.to = newState.from
    }

    if (newState.from > newState.to && which === 'to') {
      newState.from = newState.to
    }
  }

  return newState
}

export const Filters = withDebug(function Filters(props) {
  const { submitAction, values } = props
  const { translations } = useTranslation()

  const [state, setState] = useState({
    from: values.from < MIN_SLIDER ? MIN_SLIDER : values.from,
    to: values.to > MAX_SLIDER ? MAX_SLIDER : values.to,
    checkboxes: values.checkboxes,
  })

  const [isSubmitEnabled, setSubmitEnabled] = useState(true)

  const updateRanges = useCallback(
    (which, newVal, checkValues = true) => {
      const newState = applyUpdatedRanges(state, which, newVal, checkValues)

      setState(newState)
      setSubmitEnabled(true)
    },
    [setState, setSubmitEnabled, state],
  )

  const submit = useCallback(() => {
    submitAction(state)
    setSubmitEnabled(false)
  }, [submitAction, setSubmitEnabled, state])

  const filterInputsProps = {
    update: updateRanges,
    min: MIN_SLIDER,
    max: MAX_SLIDER,
    step: SALARY_SLIDER_STEP,
    from: state.from,
    to: state.to,
  }

  const multiSliderChange = useCallback(
    (_, value) => {
      setState({ ...state, from: Math.min(...value), to: Math.max(...value) })
    },
    [setState, state],
  )

  const filterCheckboxesProps = {
    enableSubmit: () => setSubmitEnabled(true),
    checkboxesState: state.checkboxes,
    updateAction: (checkboxesState) =>
      setState({
        ...state,
        checkboxes: checkboxesState,
      }),
  }

  return (
    <div>
      <div>
        <FilterSliders
          from={state.from}
          to={state.to}
          onChange={multiSliderChange}
          setSubmitEnabled={setSubmitEnabled}
        />

        <FilterInputs {...filterInputsProps} />
      </div>

      <FiltersCheckboxes {...filterCheckboxesProps} />

      <Button
        variant="outlined"
        color="primary"
        onClick={submit}
        disabled={!isSubmitEnabled}>
        {translations.submitButtonLabel}
      </Button>
    </div>
  )
})
