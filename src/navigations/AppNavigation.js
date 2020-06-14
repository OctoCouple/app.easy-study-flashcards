import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from '@/service/config'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from '@pages/Home'
import Presentation from '@pages/Presentation'
import Profile from '@pages/Profile'

const HomeStack = createStackNavigator()
const MainStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Tabs = createMaterialBottomTabNavigator()

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const TabsNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tabs.Screen name="ProfileTab" component={ProfileStackNavigator} />
  </Tabs.Navigator>
)

const AuthenticatedStack = () => {
  const { token } = useSelector((state) => state.authentication)

  useEffect(() => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }, [token])

  return (
    <MainStack.Navigator initialRouteName="Home" headerMode="none">
      <MainStack.Screen name="Tabs" component={TabsNavigator} />
      <MainStack.Screen name="Presentation" component={Presentation} />
    </MainStack.Navigator>
  )
}

export default AuthenticatedStack
