import styled from 'styled-components/native'
import Constants from 'expo-constants'
import {
  Text,
  Snackbar,
} from 'react-native-paper'
import theme from '@/styles/theme'

const { statusBarHeight } = Constants

export const PageContainer = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  background-color: ${theme.colors.background};
  align-items: center;
`

export const PageWithKeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-end;
  padding-top: ${statusBarHeight}px;
  background-color: ${theme.colors.background};
`

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`

export const FormTitle = styled(Text)`
  text-align: center;
  font-size: 18px;
  margin-bottom: 8px;
`

export const PageContainerScroll = styled.ScrollView`
  padding-top: ${statusBarHeight}px;
  flex: 1;
  background-color: ${theme.colors.background};
`

export const JustifiedRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: ${(props) => props.space || 'center'};
`

export const SpacedArea = styled.View`
  padding-left: 7%;
  padding-right: 7%;
`

export const Spacer = styled.View`
  flex: 1;
`

export const SnackbarAlert = styled(Snackbar)`
  background-color: ${(props) => theme.colors[props.color]};
  position: absolute;
`
