import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import initState from './initState'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore (initialState = initState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}
