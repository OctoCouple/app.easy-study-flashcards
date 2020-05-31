import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'

const Main = () => {
  const { isLogged, isLoading } = useSelector((state) => state.authentication)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AuthCreators.requestStorageToken())
  }, [isLoading])

  if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <>
      {isLogged ? <AppNavigation /> : <AuthNavigation />}
    </>
  )
}

export default Main
