import React from 'react'
import PropTypes from 'prop-types'
import GradientButton from 'react-native-gradient-buttons'
import { useTheme } from 'react-native-paper'

const PrimaryButton = ({ disabled, text, onPressAction }) => {
  const { colors } = useTheme()

  return (
    <GradientButton
      style={{ marginLeft: 0 }}
      text={text.toUpperCase()}
      textStyle={{ fontFamily: 'Roboto-Bold', fontSize: 16, letterSpacing: 0.75 }}
      gradientBegin={colors.accent}
      gradientEnd={colors.primary}
      gradientDirection="diagonal"
      height={50}
      width="100%"
      radius={6}
      impact
      impactStyle="Light"
      disabled={disabled}
      onPressAction={onPressAction}
    />
  )
}

PrimaryButton.defaultProps = {
  disabled: false,
  text: '',
  onPressAction: () => {},
}

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onPressAction: PropTypes.func,
}

export default PrimaryButton
