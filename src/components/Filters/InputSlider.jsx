import React from 'react'
import { Grid, Typography, Slider, Input } from '@mui/material'

export const InputSlider = ({ update, min, max, label, step, value }) => {
  const handleSliderChange = (event, newValue) => {
    update(newValue)
  }

  const handleInputChange = (event) => {
    update(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < min) {
      update(min)
    } else if (value > max) {
      update(max)
    }
  }

  return (
    <div className="filters__inputs">
      {label && (
        <Typography id="input-slider" gutterBottom>
          {label}
        </Typography>
      )}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : min}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={max}
            min={min}
          />
        </Grid>
        <Grid item>
          <Input
            className="filters__input"
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}
