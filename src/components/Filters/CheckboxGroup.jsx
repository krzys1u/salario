import React from 'react'

import { FormLabel, FormControlLabel, Checkbox } from '@mui/material'

export const CheckboxGroup = ({ checkboxes, label, update }) => {
  const handleChange = (name) => (event) => {
    update(name, event.target.checked)
  }

  const list = checkboxes.map((config) => {
    const { label, name, checked } = config

    return (
      <div key={name}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange(config)}
              value={name}
              color="primary"
            />
          }
          label={label}
        />
      </div>
    )
  })

  return (
    <div className="sidebar__legend">
      <FormLabel component="legend">{label}</FormLabel>
      {list}
    </div>
  )
}
