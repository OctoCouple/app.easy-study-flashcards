import React from 'react'
import SignUpForm from '@components/SignUpForm'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'
import HeaderImage from '@/assets/header-auth.png'
import {
  PageContainer,
  FormTitle,
  AuthImageHeader,
} from '@styles'
import {
  FormContainer,
  NavigateTextButtonContainer,
} from './style'

const SignUp = () => {
  const navigation = useNavigation()
  return (
    <PageContainer>
      <AuthImageHeader
        source={HeaderImage}
      />
      <FormContainer
        behavior="padding"
      >
        <FormTitle>Create your account</FormTitle>
        <SignUpForm />
      </FormContainer>
      <NavigateTextButtonContainer>
        <TextButton
          text="Sign in"
          onPress={() => { navigation.navigate('SignIn') }}
        />
      </NavigateTextButtonContainer>
    </PageContainer>
  )
}

export default SignUp
