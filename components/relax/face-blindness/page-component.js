import Link from 'next/link'
import dynamic from 'next/dynamic'
// import css from 'styled-jsx/css'
import { Component } from "react";
import { shuffle, without } from 'lodash'

import Layout from 'components/layouts/clean-layouts'
const Timer = dynamic(import('./timer'), { ssr: false })
const ImgGrid = dynamic(import('./img-grid'))
const AnimatedButton = dynamic(import('./animated-button'), { ssr: false })

class FaceBlindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: [0,1,2,3,4,5,6,7,8,9,10,11],
      // hidden: [],
      // startTime: undefined,
      imgSetIndex: 0,
      imgQue: this.getRandomQue(),
      paused: true,
      seconds: 20,
    };
  }

  onClickImg = (index) => {
    const alreadyHidden = this.state.hidden.indexOf(index) !== -1
    this.setState({
      hidden: alreadyHidden
        ? without(this.state.hidden, index)
        : [...this.state.hidden, index]
    })
  }

  getRandomQue = () => shuffle([
    0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5
  ])

  startGame = () => {
    this.setState({
      hidden: this.state.paused ? [] : this.state.hidden,
      paused: !this.state.paused,
    })
  }

  onComplete = () => {
    this.setState({
      hidden: [0,1,2,3,4,5,6,7,8,9,10,11],
      paused: false
    })
  }

  nextSet = () => {
    this.setState({
      imgSetIndex: (this.state.imgSetIndex > 2) ? 0 : this.state.imgSetIndex + 1,
      hidden: [0,1,2,3,4,5,6,7,8,9,10,11],
      paused: true,
    })
  }

  prevSet= () => {
    this.setState({
      imgSetIndex: (this.state.imgSetIndex < 1) ? 0 : this.state.imgSetIndex - 1,
      hidden: [0,1,2,3,4,5,6,7,8,9,10,11],
      paused: true,
    })
  }

  render () {
    const { revealed, startTime, imgSetIndex, imgQue } = this.state
    return (
      <Layout>
        <div className='wrapper'>
          <div className="sider">
            <div className="clock-wrapper">
              <Timer
                imgSetIndex={this.state.imgSetIndex}
                paused={this.state.paused}
                onComplete={this.onComplete}
                seconds={this.state.seconds + (this.state.imgSetIndex + 1) * 0.01}
              />
            </div>
            <div className="nav-wrapper">
              <AnimatedButton
                stopped={this.state.paused}
                isPaused={this.state.paused}
                onClick={this.startGame}
              />
              <p onClick={this.prevSet}>
                上一套({(this.state.imgSetIndex < 1) ? 4 : this.state.imgSetIndex})
              </p>
              <h1>{this.state.imgSetIndex + 1}</h1>
              <p onClick={this.nextSet}>
                下一套({(this.state.imgSetIndex > 2) ? 1 : this.state.imgSetIndex + 2})
              </p>
            </div>
          </div>
          <ImgGrid
            {...this.state}
            onClickImg={this.onClickImg}
          />
        </div>
        { /*language=CSS*/ }
        <style jsx>{`
          .wrapper {
            height: 100vh;
            display: flex;
          }
          .sider {
            background: ghostwhite;
            flex-basis: 250px;
            display: flex;
            flex-direction: column;
              /*background: lightgray;*/
          }
          .sider .nav-wrapper {
              text-align: center;
          }
          .sider .nav-wrapper p {
              color: #333;
              margin: 10px 0 0;
              line-height: 2;
              background: lightgray;
              cursor: pointer;
          }
          .sider .nav-wrapper h1 {
              color: hotpink;
          }
          .sider .clock-wrapper {
            flex: 1;
            padding: 20px 25px;
            /*border: 1px solid saddlebrown;*/
          }`}
        </style>
        <style jsx global>{`
          .code-box-shape {
              margin-top: -50px;
              background: blue;
              width: 50px;
              height: 50px;
              border-radius: 5px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default FaceBlindPage
