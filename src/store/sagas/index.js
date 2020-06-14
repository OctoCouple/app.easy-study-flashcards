import { all } from 'redux-saga/effects'

import authenticationSagas from './authentication'
import userSagas from './user'

function* sagas() {
  yield all([
    authenticationSagas(),
    userSagas(),
  ])
}

export default sagas
