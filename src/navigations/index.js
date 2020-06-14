import React from 'react'
import { useSelector } from 'react-redux'
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'

const Main = () => {
  const { isLogged } = useSelector((state) => state.authentication)

  return (
    <>
      {isLogged ? <AppNavigation /> : <AuthNavigation />}
    </>
  )
}

export default Main
