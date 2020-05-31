import React, { useState } from 'react'
// import { AsyncStorage } from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'
// import { Creators as AuthCreators } from '@store/authentication'

import { TextInput, Text, Title } from 'react-native-paper'
import PrimaryButton from '@components/PrimaryButton'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const dispatch = useDispatch()
  // const { authentication, user: { user } } = useSelector((state) => state)

  // function registerUser() {
  //   dispatch(AuthCreators.requestRegisterAuthentication({ email, name, password }))
  // }

  // useEffect(() => {
  //   setStorageToState()
  // }, [])

  // async function setStorageToState() {
  //   setLoadedToken(await AsyncStorage.getItem('token'))
  //   setLoadedUser(await AsyncStorage.getItem('user'))
  // }

  return (
    <>
      <Title>SignIn Screen</Title>
      <Text>Fill the fields below</Text>
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
        // onPressAction={registerUser}
        text="Login"
      />
    </>
  )
}

export default SignUpForm
