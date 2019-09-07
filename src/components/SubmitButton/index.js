import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.PropTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
