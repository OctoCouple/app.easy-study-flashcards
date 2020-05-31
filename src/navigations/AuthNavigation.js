import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignUp from '@pages/SignUp'
import SignIn from '@pages/SignIn'

const AuthStack = createStackNavigator()

const UnauthenticatedStack = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
    />
  </AuthStack.Navigator>
)

export default UnauthenticatedStack
