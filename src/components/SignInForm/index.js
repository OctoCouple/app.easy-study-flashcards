import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  password: yup
    .string()
    .min(6)
    .required()
    .label('Password'),
})

const SignInForm = () => {
  const dispatch = useDispatch()
  const { authentication } = useSelector((state) => state)
  const { colors } = useTheme()

  function authenticateUser({ email, password }) {
    dispatch(AuthCreators.requestLoginAuthentication({ email, password }))
  }

  function dismissError() {
    dispatch(AuthCreators.authDismissError())
  }

  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values) => authenticateUser(values)}
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
              onFocus={dismissError}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={(touched.email && errors.email)}
              disabled={isSubmitting}
              value={values.email}
            />
            <HelperText type="error" visible={(touched.email && errors.email)}>
              {(touched.email && errors.email)}
            </HelperText>
            <TextInput
              label="Password"
              mode="outlined"
              dense
              autoCapitalize="none"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry
              onFocus={dismissError}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              disabled={isSubmitting}
              value={values.password}
            />
            <HelperText type="error" visible={touched.password && errors.password}>
              {touched.password && errors.password}
            </HelperText>
            {isSubmitting ? (
              <ActivityIndicator animating color={colors.primary} />
            ) : (
              <PrimaryButton
                onPressAction={handleSubmit}
                text="Login"
              />
            )}
          </View>
        )}
      </Formik>
      <SnackbarAlert
        visible={authentication.error}
        onDismiss={dismissError}
        color="error"
        action={{
          label: <MaterialIcons name="close" size={24} color="white" />,
          onPress: () => {
            dismissError()
          },
        }}
      >
        {authentication.error}
      </SnackbarAlert>
    </View>
  )
}

export default SignInForm
