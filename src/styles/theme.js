import { configureFonts, DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7b1fa2',
    accent: '#5933cd',
    background: '#FAFAFA',
    surface: '#FAFAFA',
    text: '#444444',
    roundness: 6,
    placeholder: '#A6AAB4',
  },
  fonts: configureFonts({
    default: {
      regular: {
        fontFamily: 'Sarabun-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Sarabun-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Sarabun-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Sarabun-Thin',
        fontWeight: 'normal',
      },
    },
  }),
}

export default theme
