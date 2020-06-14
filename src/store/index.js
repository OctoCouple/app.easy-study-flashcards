import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import reducers from './ducks'
import sagas from './sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }
