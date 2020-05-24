import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'

import { TextInput, Text, Title } from 'react-native-paper'
import PrimaryButton from '@components/PrimaryButton'
import TextButton from '@components/TextButton'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const { authentication, user: { user } } = useSelector((state) => state)

  function registerUser() {
    dispatch(AuthCreators.requestRegisterAuthentication({ email, name, password }))
  }

  return (
    <>
      <Title>Signup Screen</Title>
      <Text>Fill the fields below</Text>
      <Text>User:</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>
        Token:
        {authentication.token}
      </Text>
      <Text>
        logado?
        {authentication.isLogged ? 'sim' : 'não'}
      </Text>
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={(textName) => setName(textName)}
        dense
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(textEmail) => setEmail(textEmail)}
        dense
      />
      <TextInput
        label="Password"
        mode="outlined"
        onChangeText={(textPassword) => setPassword(textPassword)}
        dense
        value={password}
        style={{ marginBottom: 30 }}
      />
      <PrimaryButton
        onPressAction={registerUser}
        text="Create account"
      />
      <TextButton
        text="Sign in"
        onPress={() => console.log('AUTH:', authentication)}
      />
    </>
  )
}

export default SignUpForm
