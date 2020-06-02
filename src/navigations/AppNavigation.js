
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from '@pages/Home'
import Profile from '@pages/Profile'

const HomeStack = createStackNavigator()
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


const AuthenticatedStack = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackNavigator} />
    <Tabs.Screen name="Profile" component={ProfileStackNavigator} />
  </Tabs.Navigator>
)

export default AuthenticatedStack
