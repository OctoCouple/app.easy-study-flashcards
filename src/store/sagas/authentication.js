import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects'
import { Creators as AuthCreator, Types } from '@store/authentication'
import { Creators as UserCreator } from '@store/user'
import { register } from '@api/authentication'
import { AsyncStorage } from 'react-native'

function* asyncRegister(action) {
  try {
    const { token, user } = yield call(register, action.payload)
    yield put(AuthCreator.registerAuthenticationSuccess(token))
    yield put(UserCreator.addUser(user))
    yield call(AsyncStorage.setItem, 'token', token)
    yield call(AsyncStorage.setItem, 'user', JSON.stringify(user))
  } catch (error) {
    yield put(AuthCreator.registerAuthenticationFailure(error))
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

function* watchRequestStoragetoken() {
  yield takeLatest(Types.REQUEST_STORAGE_TOKEN, setStorageData)
}

function* watchRequestLogout() {
  yield takeLatest(Types.REQUEST_AUTH_LOGOUT, eraseStorageData)
}

function* authenticationSagas() {
  yield all([
    watchRequestAuthRegister(),
    watchRequestStoragetoken(),
    watchRequestLogout(),
  ])
}

export default authenticationSagas
