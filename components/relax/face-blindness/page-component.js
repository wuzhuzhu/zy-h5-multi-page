import Link from 'next/link'
import css from 'styled-jsx/css'
import { Component } from "react";
import { shuffle, without } from 'lodash'

class FaceBlindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: [3],
      startTime: undefined,
      imgSetIndex: 0,
      imgQue: this.getRandomQue()
    };
  }

  onClickImg = (index) => {
    debugger
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

  render () {
    const { revealed, startTime, imgSetIndex, imgQue } = this.state
    return (
      <div className='wrapper'>
        <div className="img-wrapper">
          <div className="header">
            <h2>专治脸盲</h2>
          </div>

            {imgQue.map((img, index) =>
              <ImgContainer
                src={`/static/img/face-blind/${imgSetIndex}/${img}.jpg`}
                index={index}
                hidden={this.state.hidden.indexOf(index) !== -1}
                onClick={(i) => this.onClickImg(i)}
              />

            )}

        </div>
        <style jsx>{`
          .wrapper {
            height: 100vh;
          }
          .wrapper .img-wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 40px repeat(3, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 20px;

            justify-items: center;

            height: 100%
          }
          .header {
            grid-column: 1 / 5;
          }`}
        </style>
      </div>
    )
  }
}

const ImgContainer = ({ src, index, hidden, onClick }) => (
  <div className="img-container" onClick={() => onClick(index)}>
    <div className="mask">
      <h1>{index + 1}</h1>
    </div>
    <img
      src={src}
      alt="avatar"
      key={`img${index}`}
    />
    <style jsx>{`
      .img-container {
        /*background: green;*/
        max-height: 100%;
        /*border: 1px solid green;*/
        position: relative;
      }
      .img-container .mask {
        position: absolute;
        background: #aaa;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        opacity: ${ hidden ? 1 : 0 };
      }
      .img-container .mask h1 {
        color: white;
        font-size: 75px;
        font-weight: normal;
      }
      .img-container img {
        max-height: 100%;
        object-fit: cover;
        /*max-width: 100%;*/
      }`}
    </style>
  </div>
)


export default FaceBlindPage
