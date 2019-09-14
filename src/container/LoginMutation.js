import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
    login (input: $input)
}
`

export const Login = () => {
  const [login, { loading, error }] = useMutation(LOGIN)
  const { activateAuth } = useContext(Context)

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsg = error && `Credenciales erroneas`

  return <UserForm disable={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesión' />
}
