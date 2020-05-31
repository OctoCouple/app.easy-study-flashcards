import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'
import { Text, Title } from 'react-native-paper'
import TextButton from '@components/TextButton'

const Home = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.authentication)

  const logOut = () => {
    dispatch(AuthCreators.requestLogoutAuthentication())
  }

  return (
    <View>
      <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
        <Title>Home</Title>
        <Text>Home sweet Home</Text>
        <Text>token: {token}</Text>
        <TextButton
          text="Sign out"
          onPress={logOut}
        />
      </View>
    </View>
  )
}

export default Home
