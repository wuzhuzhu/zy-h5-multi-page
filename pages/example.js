import React from 'react'
import {connect} from 'react-redux'

import {increment, loadData, startClock} from '../models/example/actions'
import { withReduxSaga } from '../models/store'
import Page from 'components/example/page'

@connect(state => state)
class Counter extends React.Component {
  static async getInitialProps ({store}) {
    store.dispatch(increment())
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Index Page' linkTo='/other' {...this.props} />
  }
}

export default withReduxSaga(Counter)
