import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { Dimensions } from 'react-native'
import {
  Text,
} from 'react-native-paper'
import theme from '@/styles/theme'

const { statusBarHeight } = Constants
const deviceWidth = Dimensions.get('window').width

export const PageContainer = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  background-color: ${theme.colors.background};
  align-items: center;
`

export const PageContainerForm = styled.KeyboardAvoidingView`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  background-color: ${theme.colors.background};
  align-items: center;
  justify-content: center;
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

export const SpacedContainer = styled.View`
  max-width: 90%;
  flex: 1;
`

export const AuthImageHeader = styled.Image`
  flex: 1;
  width: ${deviceWidth}px;
`
