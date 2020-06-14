import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
import { View, Text, StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import theme from '@/styles/theme'
import fonts from '@/styles/fonts'
import { useFonts } from '@use-expo/font'
import { NavigationContainer } from '@react-navigation/native'
import Main from '@/navigations'

const Loading = () => (
  <View><Text>Loading...</Text></View>
)

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}
