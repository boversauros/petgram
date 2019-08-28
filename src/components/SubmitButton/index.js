import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}
