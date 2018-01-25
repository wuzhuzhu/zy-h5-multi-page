import CleanLayout from './clean-layouts'
import React from 'react';

class Mainlayout extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <CleanLayout>
        {/*<p>这个来自于main-layout</p>*/}
        <div style={{ border: '1px dotted gray' }}>
          { this.props.children }
        </div>
      </CleanLayout>
    )
  }
}

export default Mainlayout