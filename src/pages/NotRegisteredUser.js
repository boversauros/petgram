import React from 'react'
import { Layout } from '../components/Layout'
import { Register } from '../container/RegisterMutation'
import { Login } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  return (
    <Layout>
      <Register />
      <Login />
    </Layout>
  )
}
