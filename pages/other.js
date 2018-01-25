import React from 'react'

import {increment, startClock} from '../models/example/actions'
import { withReduxSaga } from '../models/store'
import Page from '../components/page'

class Counter extends React.Component {
  static async getInitialProps ({store}) {
    store.dispatch(increment())
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Other Page' linkTo='/example' />
  }
}

export default withReduxSaga(Counter)
