import React from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { withDebug } from '../../utils/withDebug'

import { useTranslation } from '../../contexts'
import { EMPLOYMENT_TYPES } from '../../const'
import { Chip, Popover, Typography } from '@mui/material'
import { MAX_EMPLOYMENT_TYPES } from '../../config'

const options = EMPLOYMENT_TYPES

const ChipWithPopover = ({ title, additionalProps }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <span>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        component="span"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        <Chip label={title} {...additionalProps} />
      </Typography>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        onClose={handlePopoverClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableRestoreFocus>
        {title}
      </Popover>
    </span>
  )
}

export const FiltersEmploymentTypes = withDebug(
  function FiltersEmploymentTypes({ values, onChange }) {
    const { translations, t } = useTranslation()

    return (
      <>
        <Typography gutterBottom component="span">
          {translations.employmentTypeLabel}
        </Typography>

        <Autocomplete
          multiple
          id="tags-standard"
          options={options}
          filterSelectedOptions
          disableCloseOnSelect
          fullWidth
          getOptionLabel={(option) => t(option.label)}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          value={values}
          getOptionDisabled={() => {
            return values.length >= MAX_EMPLOYMENT_TYPES
          }}
          onChange={(event, choosenOptions) => {
            onChange(choosenOptions)
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <ChipWithPopover
                key={`chip-${option.label}`}
                title={t(option.label)}
                additionalProps={getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <div>
              <TextField
                {...params}
                variant="standard"
                placeholder={translations.employmentTypeLabel}
              />
            </div>
          )}
        />
      </>
    )
  },
)
