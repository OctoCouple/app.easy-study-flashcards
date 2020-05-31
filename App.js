import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import { View, Text, StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from '@/styles/theme'
import fonts from '@/styles/fonts'
import { useFonts } from '@use-expo/font'
import { NavigationContainer } from '@react-navigation/native'
import Main from '@/navigations'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}
