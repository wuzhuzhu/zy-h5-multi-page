import {all} from 'redux-saga/effects'
import es6promise from 'es6-promise'

es6promise.polyfill()

import exampleSagas from './example/sagas'

function * rootSaga () {
  yield all([
    ...exampleSagas
  ])
}

export default rootSaga
