import React from 'react'
import Page from 'components/example/with-out-antd'

class Container extends React.Component {
  componentDidMount () {
  }

  render () {
    return <Page title='Clean Page' linkTo='/example' {...this.props} />
  }
}

export default Container
