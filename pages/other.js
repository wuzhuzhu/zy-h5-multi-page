import React from 'react'
import { connect } from 'react-redux'
import {increment, startClock} from 'models/example/actions'
import { withReduxSaga } from 'models/store'
import Page from 'components/example/page'

@connect(state => state.example)
class Counter extends React.Component {
  static async getInitialProps ({store}) {
    store.dispatch(increment())
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Other Page' linkTo='/example' {...this.props} />
  }
}

export default withReduxSaga(Counter)
