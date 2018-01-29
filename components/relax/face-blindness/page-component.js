import Link from 'next/link'
import dynamic from 'next/dynamic'
// import css from 'styled-jsx/css'
import { Component } from "react";
import { shuffle, without } from 'lodash'

import Layout from 'components/layouts/clean-layouts'
import * as animationData from './cry-emoji.json'
const Timer = dynamic(import('./timer'), { ssr: false })
const ImgContainer = dynamic(import('./img-container'))
const AnimatedButton = dynamic(import('./animated-button'), { ssr: false })

class FaceBlindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: [0,1,2,3,4,5,6,7,8,9,10,11],
      // startTime: undefined,
      imgSetIndex: 0,
      imgQue: this.getRandomQue(),
      paused: true,
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
      hidden: [],
      paused: false
    })
  }

  onComplete = () => {
    this.setState({
      hidden: [0,1,2,3,4,5,6,7,8,9,10,11],
      paused: false
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
                paused={this.state.paused}
                onComplete={this.onComplete}
              />
            {/*  <div>
                <p>paused: {this.state.paused ? '是' : '否'}</p>
                <p>hidden: {this.state.hidden}</p>
                <p>imgSetIndex: {this.state.imgSetIndex}</p>
                <p>imgQue: {this.state.imgQue}</p>
              </div>*/}
            </div>
            <div className="nav-wrapper">
              <AnimatedButton
                stopped={this.state.paused}
                isPaused={this.state.paused}
                onClick={this.startGame}
              />
              <p>上一题</p>
              <p>下一题</p>
            </div>
          </div>
          <div className="img-wrapper">
              {imgQue.map((img, index) =>
                <ImgContainer
                  src={`/static/img/face-blind/${imgSetIndex}/${img}.jpg`}
                  index={index}
                  hidden={this.state.hidden.indexOf(index) !== -1}
                  onClick={(i) => this.onClickImg(i)}
                />
              )}

          </div>
        </div>
        { /*language=CSS*/ }
        <style jsx>{`
          .wrapper {
            height: 100vh;
            display: flex;
          }
          .wrapper .img-wrapper {
            display: grid;
            flex: 1;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 20px;

            justify-items: center;

            height: 100%
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
          }
          .sider .clock-wrapper {
            flex: 1;
            padding: 20px 25px;
            /*border: 1px solid saddlebrown;*/
          }`}
        </style>
      </Layout>
    )
  }
}

export default FaceBlindPage
