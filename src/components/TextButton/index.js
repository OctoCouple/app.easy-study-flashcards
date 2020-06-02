import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-paper'

const TextButton = ({
  text,
  disabled,
  loading,
  onPress,
}) => (
  <Button
    mode="text"
    uppercase
    disabled={disabled}
    loading={loading}
    onPress={onPress}
    labelStyle={{ fontFamily: 'Roboto-Bold', fontSize: 18 }}
  >
    {text}
  </Button>
)

TextButton.defaultProps = {
  disabled: false,
  loading: false,
  text: '',
  onPress: () => {},
}

TextButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default TextButton
