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
import { Creators as AuthCreator, Types } from '@store/authentication'
import { Creators as UserCreator } from '@store/user'
import {
  register,
  login,
  requestPassword,
} from '@api/authentication'
import { AsyncStorage } from 'react-native'

function* setAuthentication({ token, user }) {
  yield put(AuthCreator.registerAuthenticationSuccess(token))
  yield put(UserCreator.addUser(user))
  yield call(AsyncStorage.setItem, 'token', token)
  yield call(AsyncStorage.setItem, 'user', JSON.stringify(user))
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
    const errorStatus = path(['response', 'status'], error)
    if (equals(errorStatus, 401)) {
      const errorMessage = 'Invalid credentials'
      yield put(AuthCreator.registerAuthenticationFailure(errorMessage))
    } else {
      yield put(AuthCreator.registerAuthenticationFailure('Internal error'))
    }
  }
}

function* asyncRequestPassword(action) {
  try {
    yield call(requestPassword, action.payload)
  } catch (error) {
    yield put(AuthCreator.registerAuthenticationFailure('Internal error'))
  }
}

function* setStorageData() {
  const token = yield call(AsyncStorage.getItem, 'token')
  yield put(AuthCreator.setStorageToken({
    token,
    isLogged: !!token,
  }))
}

function* eraseStorageData() {
  yield call(AsyncStorage.clear)
  yield put(AuthCreator.logoutAuthentication())
}

function* watchRequestAuthRegister() {
  yield takeLatest(Types.REQUEST_AUTH_REGISTER, asyncRegister)
}

function* watchRequestAuthLogin() {
  yield takeLatest(Types.REQUEST_AUTH_LOGIN, asyncLogin)
}

function* watchRequestStoragetoken() {
  yield takeLatest(Types.REQUEST_STORAGE_TOKEN, setStorageData)
}

function* watchRequestLogout() {
  yield takeLatest(Types.REQUEST_AUTH_LOGOUT, eraseStorageData)
}

function* watchrequestForgotPassword() {
  yield takeLatest(Types.REQUEST_FORGOT_PASSWORD, asyncRequestPassword)
}

function* authenticationSagas() {
  yield all([
    watchRequestAuthRegister(),
    watchRequestStoragetoken(),
    watchRequestLogout(),
    watchRequestAuthLogin(),
    watchrequestForgotPassword(),
  ])
}

export default authenticationSagas
