import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='email' {...email} />
        <Input placeholder='password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  )
}
