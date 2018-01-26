import CleanLayout from './clean-layouts'
import React from 'react';

import antdCss from 'antd-mobile/dist/antd-mobile.css'

class Mainlayout extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <CleanLayout>
        <style dangerouslySetInnerHTML={{ __html: antdCss }} />
        {/*<p>这个来自于main-layout</p>*/}
        { this.props.children }
      </CleanLayout>
    )
  }
}

export default Mainlayout