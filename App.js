import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import SignUp from '@pages/SignUp'
import { StyleSheet, View, Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from '@/styles/theme'
import { useFonts } from '@use-expo/font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sarabun-Regular': require('./assets/fonts/Sarabun-Regular.ttf'),
    'Sarabun-Medium': require('./assets/fonts/Sarabun-Medium.ttf'),
    'Sarabun-Light': require('./assets/fonts/Sarabun-Light.ttf'),
    'Sarabun-Thin': require('./assets/fonts/Sarabun-Thin.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <View style={style.container}>
            <SignUp />
          </View>
        </PaperProvider>
      </Provider>
    )
  }
  return <View><Text>Loading...</Text></View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
