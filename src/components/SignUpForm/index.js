import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'

import { TextInput, Text, Title } from 'react-native-paper'
import PrimaryButton from '@components/PrimaryButton'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'


const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function registerUser() {
    dispatch(AuthCreators.requestRegisterAuthentication({ email, name, password }))
  }

  return (
    <>
      <Title>Signup Screen</Title>
      <Text>Fill the fields below</Text>
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
        onPress={() => { navigation.navigate('SignIn') }}
      />
    </>
  )
}

export default SignUpForm
