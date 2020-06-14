import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as UserCreator } from '@store/user'
import {
  Text,
  Button,
} from 'react-native-paper'

const PresentationStepper = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const closePresentation = () => {
    dispatch(UserCreator.requestUpdateUser({
      attributes: { first_login: false },
      id: user.id,
    }))
    navigation.pop()
  }

  return (
    <>
      <Text>Hello Modal</Text>
      <Text>Imagem</Text>
      <Button onPress={closePresentation}>
        I undestood!
      </Button>
    </>
  )
}

export default PresentationStepper
