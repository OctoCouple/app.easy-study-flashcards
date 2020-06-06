import React from 'react'
import ForgotPasswordForm from '@components/ForgotPasswordForm'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'
import HeaderImage from '@/assets/header-auth.png'
import {
  FormTitle,
  SafeArea,
  PageWithKeyboardContainer,
  Spacer,
} from '@styles'
import {
  AuthImageHeader,
  DismissKeyboardArea,
  FormArea,
  NavigateTextButtonContainer,
} from '@styles/authStyle'
import {
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

const ForgotPassword = () => {
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
              <FormTitle>Enter your email to send verification</FormTitle>
              <ForgotPasswordForm />
            </FormArea>
            <Spacer />
            <NavigateTextButtonContainer>
              <TextButton
                text="Sign in"
                onPress={() => { navigation.navigate('SignIn') }}
              />
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

export default ForgotPassword
