import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Subheading,
} from 'react-native-paper'
import { GOOGLE_CLIENT_ID } from 'react-native-dotenv'
import * as Google from 'expo-google-app-auth'
import {
  SnackbarAlert,
} from '@styles'
import {
  Image,
} from 'react-native'
import GoogleLogo from '@/assets/google-logo.png'
import {
  GoogleAuthContainer,
  GoogleButton,
} from './style'


const GoogleAuth = () => {
  const dispatch = useDispatch()
  const [hasError, setHasError] = useState(false)

  function authenticateUser({ accessToken, provider }) {
    dispatch(AuthCreators.requestSocialAuth({ accessToken, provider }))
  }

  const handleAuthentication = async () => {
    try {
      const { accessToken } = await Google.logInAsync({
        androidClientId: GOOGLE_CLIENT_ID,
        scopes: ['profile', 'email'],
      })
      if (accessToken) {
        authenticateUser({ accessToken, provider: 'google' })
      }
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <GoogleAuthContainer>
      <Subheading>- or -</Subheading>
      <GoogleButton
        onPress={handleAuthentication}
        icon={() => (
          <Image
            source={GoogleLogo}
          />
        )}
      />
      <SnackbarAlert
        visible={hasError}
        onDismiss={() => setHasError(false)}
        color="error"
        action={{
          label: <MaterialIcons name="close" size={24} color="white" />,
          onPress: () => setHasError(false),
        }}
      >
        Service temporary unavailable
      </SnackbarAlert>
    </GoogleAuthContainer>
  )
}

export default GoogleAuth
