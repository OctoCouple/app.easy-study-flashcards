import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as AuthCreators } from '@store/authentication'
import {
  TextInput,
  HelperText,
  ActivityIndicator,
  useTheme,
} from 'react-native-paper'
import PrimaryButton from '@components/PrimaryButton'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  FormContainer,
  FormContainerFields,
} from './style'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .label('Name'),
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

const SignUpForm = () => {
  const dispatch = useDispatch()
  const { authentication } = useSelector((state) => state)
  const { colors } = useTheme()
  const customError = {
    'unique validation failed on email': 'E-mail is already in use.',
  }

  function registerUser({ email, name, password }) {
    dispatch(AuthCreators.requestRegisterAuthentication({ email, name, password }))
  }

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={async (values) => registerUser(values)}
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
          <FormContainerFields>
            <TextInput
              label="Name"
              mode="outlined"
              dense
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
              disabled={isSubmitting}
              value={values.name}
            />
            <HelperText type="error" visible={touched.name && errors.name}>
              {touched.name && errors.name}
            </HelperText>
            <TextInput
              label="Email"
              mode="outlined"
              dense
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={authentication.error || (touched.email && errors.email)}
              disabled={isSubmitting}
              value={values.email}
            />
            <HelperText type="error" visible={authentication.error || (touched.email && errors.email)}>
              {customError[authentication.error] || (touched.email && errors.email)}
            </HelperText>
            <TextInput
              label="Password"
              mode="outlined"
              dense
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              keyboardType="visible-password"
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
                text="Create account"
              />
            )}
          </FormContainerFields>
        )}
      </Formik>
    </FormContainer>
  )
}

export default SignUpForm
