import Link from 'next/link'
import css from 'styled-jsx/css'
// import imgs from 'constants/mock/face-blind'
import { Component } from "react";
import { shuffle, without } from 'lodash'

class FaceBlindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: [],
      startTime: undefined,
      imgSetIndex: 0,
      imgQue: this.getRandomQue()
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

  render () {
    const { revealed, startTime, imgSetIndex, imgQue } = this.state
    return (
      <div className='wrapper'>
        <div className="img-wrapper">
          <div className="header">
            <h2>专治脸盲</h2>
          </div>

            {imgQue.map((img, index) =>
              <div className="img-container">
                <img
                  src={`/static/img/face-blind/${imgSetIndex}/${img}.jpg`}
                  alt="avatar"
                  key={`img${index}`}
                />
              </div>
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
          }
          .img-container {
            /*background: green;*/
            max-height: 100%;
          }
          .img-container img {
            max-height: 100%;
            object-fit: cover;
            /*max-width: 100%;*/
          }`}
        </style>
      </div>
    )
  }
}


export default FaceBlindPage
