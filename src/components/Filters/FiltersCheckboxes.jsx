import React, { useCallback } from 'react'

import { CheckboxGroup } from './CheckboxGroup'
import { withDebug } from '../../utils/withDebug'

import { ADDITIONAL_FILTERS, EMPLOYMENT_TYPES, MEASURES } from '../../const'
import { useTranslation } from '../../contexts'

const getCheckboxGroupConfig = (translations) => ({
  types: {
    label: translations.employmentTypeLabel,
    config: EMPLOYMENT_TYPES,
  },
  measures: {
    label: translations.measuresLabel,
    config: MEASURES,
  },
  additionalFilters: {
    label: translations.additionalFiltersLabel,
    config: ADDITIONAL_FILTERS,
  },
})

const updateCheckboxState = (state, key, { checkbox, checked }) => ({
  ...state,
  [key]: {
    ...state[key],
    [checkbox.name]: {
      checked,
      data: checkbox,
    },
  },
})

export const FiltersCheckboxes = withDebug(function FiltersCheckboxes({
  enableSubmit,
  checkboxesState,
  updateAction,
}) {
  const { translations, t } = useTranslation()

  const checkboxUdateFunctions = {
    types: useCallback(
      (checkbox, checked) => {
        updateAction(
          updateCheckboxState(checkboxesState, 'types', { checkbox, checked }),
        )

        enableSubmit()
      },
      [enableSubmit, checkboxesState, updateAction],
    ),
    measures: useCallback(
      (checkbox, checked) => {
        updateAction(
          updateCheckboxState(checkboxesState, 'measures', {
            checkbox,
            checked,
          }),
        )

        enableSubmit()
      },
      [enableSubmit, checkboxesState, updateAction],
    ),
    additionalFilters: useCallback(
      (checkbox, checked) => {
        updateAction(
          updateCheckboxState(checkboxesState, 'additionalFilters', {
            checkbox,
            checked,
          }),
        )

        enableSubmit()
      },
      [enableSubmit, checkboxesState, updateAction],
    ),
  }

  const prepareCheckboxProps = (stateKey) => {
    const {
      [stateKey]: { label, config },
    } = getCheckboxGroupConfig(translations)

    const update = checkboxUdateFunctions[stateKey]

    const isCheckboxChecked = (field, id) =>
      (checkboxesState[field][id] || { checked: false }).checked || false

    return {
      label,
      update,
      checkboxes: config.map((config) => ({
        ...config,
        label: t(config.label),
        checked: isCheckboxChecked(stateKey, config.name),
      })),
    }
  }

  const employmentTypesProps = prepareCheckboxProps('types')
  const measuresProps = prepareCheckboxProps('measures')
  const additionalFiltersProps = prepareCheckboxProps('additionalFilters')

  return (
    <>
      <CheckboxGroup {...employmentTypesProps} />
      <CheckboxGroup {...measuresProps} />
      <CheckboxGroup {...additionalFiltersProps} />
    </>
  )
})
