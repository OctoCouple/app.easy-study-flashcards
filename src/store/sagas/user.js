import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects'
import { Creators as UserCreator, Types } from '@store/user'
import {
  update,
} from '@api/user'

function* asyncUpdateUser({ payload }) {
  const user = yield call(update, payload.attributes, payload.id)
  yield put(UserCreator.updateUser(user))
}

function* watchRequestUpdateUser() {
  yield takeLatest(Types.REQUEST_UPDATE_USER, asyncUpdateUser)
}

function* authenticationSagas() {
  yield all([
    watchRequestUpdateUser(),
  ])
}

export default authenticationSagas
