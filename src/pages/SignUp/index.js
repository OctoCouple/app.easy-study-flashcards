import React from 'react'
import SignUpForm from '@components/SignUpForm'
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
            <SpacedArea>
              <FormTitle>Create your account</FormTitle>
              <SignUpForm />
            </SpacedArea>
            <Spacer />
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
