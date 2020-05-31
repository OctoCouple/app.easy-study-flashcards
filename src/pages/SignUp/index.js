import React from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import TextButton from '@components/TextButton'
import SignUpForm from '@components/SignUpForm'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const navigation = useNavigation()
  return (
    <View
      keyboardShouldPersistTaps="handled"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
        <SignUpForm />
        <TextButton
          text="Sign in"
          onPress={() => { navigation.navigate('SignIn') }}
        />
      </View>
    </View>
  )
}

export default SignUp
