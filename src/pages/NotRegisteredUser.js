import React, { Fragment } from 'react'
import { Register } from '../container/RegisterMutation'
import { Login } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  return (
    <Fragment>
      <Register />
      <Login />
    </Fragment>
  )
}
