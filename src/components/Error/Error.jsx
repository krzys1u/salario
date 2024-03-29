import React from 'react'
import { Button } from '@mui/material'

import { withDebug } from '../../utils/withDebug'
import { ErrorIcon } from './ErrorIcon'
import { MessageCard } from '../MessageCard'
import { useTranslation } from '../../contexts'

export const Error = withDebug(function Error(props) {
  const { error, onClick } = props
  const { translations } = useTranslation()

  return (
    <MessageCard
      label={translations.errorLabel}
      code={error.message}
      icon={<ErrorIcon />}
      button={
        <Button variant="outlined" color="primary" onClick={onClick}>
          {translations.tryAgainLabel}
        </Button>
      }
    />
  )
})
