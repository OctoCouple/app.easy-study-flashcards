import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects'
import { Creators as AuthCreator, Types } from '@store/authentication'
import { Creators as UserCreator } from '@store/user'
import { register } from '@api/authentication'

function* asyncRegister(action) {
  try {
    const { token, user } = yield call(register, action.payload)
    yield put(AuthCreator.registerAuthenticationSuccess(token))
    yield put(UserCreator.addUser(user))
  } catch (error) {
    yield put(AuthCreator.registerAuthenticationFailure(error))
  }
}

function* watchRequestAuthRegister() {
  yield takeLatest(Types.REQUEST_AUTH_REGISTER, asyncRegister)
}

function* authenticationSagas() {
  yield all([
    watchRequestAuthRegister(),
  ])
}

export default authenticationSagas
