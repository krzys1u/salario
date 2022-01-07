import { CREATIVE_RIGHTS_STEPS } from './config'

export const UOP_EMPLOYER_COST = 'uop-employer-cost'

export const EMPLOYMENT_TYPES = [
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    label: `contractOfEmploymentLabel ${creativeRightsValue}%`,
    name: `uop-${creativeRightsValue}`,
    legendLabel: `contractOfEmploymentLegendLabel ${creativeRightsValue}%`,
    shortLabel: `contractOfEmploymentShortLabel ${creativeRightsValue}%`,
  })),
  {
    label: 'B2B(19%) - lowZusLabel',
    name: 'b2b-low-zus',
    shortLabel: 'B2B - lowZusLabel',
  },
  {
    label: 'B2B(19%) - highZusLabel',
    name: 'b2b-high-zus',
    shortLabel: 'B2B - highZusLabel',
  },
]

export const MEASURES = [
  {
    label: 'Min',
    name: 'nettoMin',
    additionalFields: [
      {
        name: 'taxMin',
        labelSuffix: 'taxLabelSuffix',
        enabler: 'showTaxes',
      },
    ],
  },
  {
    label: 'Max',
    name: 'nettoMax',
    additionalFields: [
      {
        name: 'taxMax',
        labelSuffix: 'taxLabelSuffix',
        enabler: 'showTaxes',
      },
    ],
  },
  {
    label: 'averageLabel',
    name: 'nettoAvg',
    additionalFields: [
      {
        name: 'taxAvg',
        labelSuffix: 'taxLabelSuffix',
        enabler: 'showTaxes',
      },
    ],
  },
  {
    label: 'sumLabel',
    name: 'nettoSum',
    additionalFields: [
      {
        name: 'taxSum',
        labelSuffix: 'taxLabelSuffix',
        enabler: 'showTaxes',
      },
    ],
  },
]

export const ADDITIONAL_FILTERS = [
  { label: 'showEmployerCostLabel', name: 'showEmployerCost' },
  { label: 'showTaxesLabel', name: 'showTaxes' },
  // { label: 'showNewLad', name: 'showNewLad' },
  // { label: 'showNewLadOnly', name: 'showNewLadOnly' },
]
