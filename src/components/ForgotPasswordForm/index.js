import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'
import {
  TextInput,
  HelperText,
  ActivityIndicator,
  useTheme,
} from 'react-native-paper'
import { View } from 'react-native'
import PrimaryButton from '@components/PrimaryButton'
import { MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  SnackbarAlert,
} from '@styles'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .label('Email'),
})

const ForgotPasswordForm = () => {
  const dispatch = useDispatch()
  const [isSnackbarVisible, setSnackbarVisible] = useState(false)
  const { colors } = useTheme()

  function requestPassword({ email }) {
    dispatch(AuthCreators.requestForgotPassword({ email }))
    setSnackbarVisible(true)
  }

  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values) => requestPassword(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          isSubmitting,
          touched,
          values,
        }) => (
          <View>
            <TextInput
              label="Email"
              mode="outlined"
              dense
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={(touched.email && errors.email)}
              disabled={isSubmitting}
              value={values.email}
            />
            <HelperText type="error" visible={(touched.email && errors.email)}>
              {(touched.email && errors.email)}
            </HelperText>
            {isSubmitting ? (
              <ActivityIndicator animating color={colors.primary} />
            ) : (
              <PrimaryButton
                onPressAction={handleSubmit}
                text="Send Email"
              />
            )}
          </View>
        )}
      </Formik>
      <SnackbarAlert
        visible={isSnackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        color="primary"
        action={{
          label: <MaterialIcons name="close" size={24} color="white" />,
          onPress: () => {
            setSnackbarVisible(false)
          },
        }}
      >
        Check your e-mail to reset your password.
      </SnackbarAlert>
    </View>
  )
}

export default ForgotPasswordForm
