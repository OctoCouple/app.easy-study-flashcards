import { all } from 'redux-saga/effects'

import authenticationSagas from './authentication'

function* sagas() {
  yield all([
    authenticationSagas(),
  ])
}

export default sagas
