import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import rootReducer, {exampleInitialState} from './example/reducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore (initialState = exampleInitialState) {
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
