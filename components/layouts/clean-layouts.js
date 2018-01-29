import React from 'react'
// import Head from 'next/head'
import globalCss from 'styles/index.css'

import registerServiceWorker from 'utils/registerServiceWorker'

export default class extends React.PureComponent {
  componentDidMount () {
    // 注册service worker
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker()
    }
  }
  render () {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: globalCss }} />
        { this.props.children }
      </div>
    )
  }
}

