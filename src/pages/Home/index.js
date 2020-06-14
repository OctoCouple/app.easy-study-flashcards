import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'
import { Text, Title } from 'react-native-paper'
import TextButton from '@components/TextButton'

const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const navigation = useNavigation()

  useEffect(() => {
    if (user.first_login) {
      navigation.navigate('Presentation')
    }
  }, [user])

  const logOut = () => {
    dispatch(AuthCreators.requestLogoutAuthentication())
  }

  return (
    <View>
      <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
        <Title>Home</Title>
        <Title>{user.name}</Title>
        <Text>Home sweet Home</Text>
        <TextButton
          text="Sign out"
          onPress={logOut}
        />
      </View>
    </View>
  )
}

export default Home
