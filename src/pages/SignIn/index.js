import React from 'react'
import { View } from 'react-native'
import SignInForm from '@components/SignInForm'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'


const SignIn = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
        <SignInForm />
        <TextButton
          text="Create account"
          onPress={() => { navigation.navigate('SignUp') }}
        />
      </View>
    </View>
  )
}

export default SignIn
