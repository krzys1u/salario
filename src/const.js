import { CREATIVE_RIGHTS_STEPS } from './config'

export const UOP_EMPLOYER_COST = 'uop-employer-cost'
export const UOP_EMPLOYER_COST_NEW_DEAL = 'uop-employer-cost-nd'

export const EMPLOYMENT_TYPES = [
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    label: `contractOfEmploymentLabel ${creativeRightsValue}% (before2022Label)`,
    name: `uop-${creativeRightsValue}`,
    legendLabel: `contractOfEmploymentLegendLabel ${creativeRightsValue}% (before2022Label)`,
    shortLabel: `contractOfEmploymentShortLabel ${creativeRightsValue}% (before2022ShortLabel)`,
  })),
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    label: `contractOfEmploymentLabel ${creativeRightsValue}% (newDealLabel)`,
    name: `uop-${creativeRightsValue}-nd`,
    legendLabel: `contractOfEmploymentLegendLabel ${creativeRightsValue}% (newDealLabel)`,
    shortLabel: `contractOfEmploymentShortLabel ${creativeRightsValue}% (newDealShortLabel)`,
  })),
  {
    label: 'B2B(19%) - lowZusLabel (before2022Label)',
    name: 'b2b-low-zus',
    shortLabel: 'B2B - lowZusLabel (before2022ShortLabel)',
  },
  {
    label: 'B2B(19%) - highZusLabel (before2022Label)',
    name: 'b2b-high-zus',
    shortLabel: 'B2B - highZusLabel (before2022ShortLabel)',
  },
  {
    label: 'B2B(19%) - lowZusLabel (newDealLabel)',
    name: 'b2b-low-zus-nd',
    shortLabel: 'B2B - lowZusLabel (newDealShortLabel)',
  },
  {
    label: 'B2B(19%) - highZusLabel (newDealLabel)',
    name: 'b2b-high-zus-nd',
    shortLabel: 'B2B - highZusLabel (newDealShortLabel)',
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
