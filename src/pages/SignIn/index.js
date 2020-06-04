import React from 'react'
import SignInForm from '@components/SignInForm'
import TextButton from '@components/TextButton'
import { useNavigation } from '@react-navigation/native'
import HeaderImage from '@/assets/header-auth.png'
import {
  FormTitle,
  SafeArea,
  PageWithKeyboardContainer,
  SpacedArea,
  Spacer,
} from '@styles'
import {
  AuthImageHeader,
  DismissKeyboardArea,
  NavigateTextButtonContainer,
} from '@styles/authStyle'
import {
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

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
            <SpacedArea>
              <FormTitle>Login</FormTitle>
              <SignInForm />
            </SpacedArea>
            <Spacer />
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
