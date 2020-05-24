import React from 'react'
import { View } from 'react-native'
import SignUpForm from '@components/SignUpForm'

const SignUp = () => (
  <View>
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <SignUpForm />
    </View>
  </View>
)

export default SignUp
