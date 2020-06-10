import React from 'react'
import SignUpForm from '@components/SignUpForm'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'
import {
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import GoogleAuth from '@components/GoogleAuth'

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

const SignUp = () => {
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
              <FormTitle>Create your account</FormTitle>
              <SignUpForm />
            </FormArea>
            <GoogleAuth />
            <NavigateTextButtonContainer>
              <TextButton
                text="Sign in"
                onPress={() => { navigation.navigate('SignIn') }}
              />
            </NavigateTextButtonContainer>
          </DismissKeyboardArea>
        </TouchableWithoutFeedback>
      </SafeArea>
    </PageWithKeyboardContainer>
  )
}

export default SignUp
