import {
  path,
  equals,
} from 'ramda'
import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects'
import axios from '@/service/config'
import { Creators as AuthCreator, Types } from '@store/authentication'
import { Creators as UserCreator } from '@store/user'
import {
  register,
  login,
  requestPassword,
  socialAuthentication,
} from '@api/authentication'

function* setAuthentication({ token, user }) {
  yield put(UserCreator.addUser(user))
  yield put(AuthCreator.registerAuthenticationSuccess(token))
}

function* handleFailAuthentication(error, errorMessage) {
  const errorStatus = path(['response', 'status'], error)
  if (equals(errorStatus, 401)) {
    yield put(AuthCreator.registerAuthenticationFailure(errorMessage))
  } else {
    yield put(AuthCreator.registerAuthenticationFailure('Internal error'))
  }
}

function* asyncRegister(action) {
  try {
    const { token, user } = yield call(register, action.payload)
    yield setAuthentication({ token, user })
  } catch (error) {
    const errorMessage = path(['response', 'data', 'errors', 0, 'detail'], error)
    yield put(AuthCreator.registerAuthenticationFailure(errorMessage))
  }
}

function* asyncLogin(action) {
  try {
    const { token, user } = yield call(login, action.payload)
    yield setAuthentication({ token, user })
  } catch (error) {
    yield handleFailAuthentication(error, 'Invalid credentials')
  }
}

function* asyncSocialAuth(action) {
  try {
    const { token, user } = yield call(socialAuthentication, action.payload)
    yield setAuthentication({ token, user })
  } catch (error) {
    yield handleFailAuthentication(error, 'Invalid Google Token')
  }
}

function* asyncRequestPassword(action) {
  try {
    yield call(requestPassword, action.payload)
  } catch (error) {
    yield put(AuthCreator.registerAuthenticationFailure('Internal error'))
  }
}

function* eraseStorageData() {
  yield put(AuthCreator.logoutAuthentication())
  yield put(UserCreator.resetUser())
  delete axios.defaults.headers.common.Authorization
}

function* watchRequestAuthRegister() {
  yield takeLatest(Types.REQUEST_AUTH_REGISTER, asyncRegister)
}

function* watchRequestAuthLogin() {
  yield takeLatest(Types.REQUEST_AUTH_LOGIN, asyncLogin)
}

function* watchRequestLogout() {
  yield takeLatest(Types.REQUEST_AUTH_LOGOUT, eraseStorageData)
}

function* watchRequestForgotPassword() {
  yield takeLatest(Types.REQUEST_FORGOT_PASSWORD, asyncRequestPassword)
}

function* watchRequestSocialAuth() {
  yield takeLatest(Types.REQUEST_SOCIAL_AUTH, asyncSocialAuth)
}

function* authenticationSagas() {
  yield all([
    watchRequestAuthRegister(),
    watchRequestLogout(),
    watchRequestAuthLogin(),
    watchRequestForgotPassword(),
    watchRequestSocialAuth(),
  ])
}

export default authenticationSagas
