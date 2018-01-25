import CleanLayout from './clean-layouts'
import React from 'react';
import stylesheet from 'styles/index.scss'

class Mainlayout extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <CleanLayout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <p>这个来自于main-layout</p>
        <div style={{ border: '1px dotted gray' }}>
          { this.props.children }
        </div>
      </CleanLayout>
    )
  }
}

export default Mainlayout