import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
    signup (input: $input)
}
`
export const Register = () => {
  const { activateAuth } = useContext(Context)
  const [register, { loading, error }] = useMutation(REGISTER)

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const errorMsg = error && `Hay algun problema con el registro`

  return <UserForm disable={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
}
