import React from 'react'
import SignInForm from '@components/SignInForm'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'
import GoogleAuth from '@components/GoogleAuth'
import {
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import HeaderImage from '@/assets/header-auth.png'
import {
  FormTitle,
  SafeArea,
  PageWithKeyboardContainer,
} from '@styles'
import {
  AuthImageHeader,
  DismissKeyboardArea,
  NavigateTextButtonContainer,
  FormArea,
} from '@styles/authStyle'

const SignIn = () => {
  const navigation = useNavigation()
  return (
    <PageWithKeyboardContainer>
      <SafeArea>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <DismissKeyboardArea>
            <AuthImageHeader
              source={HeaderImage}
            />
            <FormArea>
              <FormTitle>Login</FormTitle>
              <SignInForm />
            </FormArea>
            <GoogleAuth />
            <NavigateTextButtonContainer>
              <TextButton
                text="Create account"
                onPress={() => { navigation.navigate('SignUp') }}
              />
            </NavigateTextButtonContainer>
          </DismissKeyboardArea>
        </TouchableWithoutFeedback>
      </SafeArea>
    </PageWithKeyboardContainer>
  )
}

export default SignIn
