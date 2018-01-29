import QueueAnim from 'rc-queue-anim';
import dynamic from "next/dynamic";
import ImgContainer from './img-container'

export default ({ imgQue, imgSetIndex, hidden, onClickImg }) => (
  <div className="img-wrapper">
      {imgQue.map((img, index) =>
        <ImgContainer
          src={`/static/img/face-blind/${imgSetIndex}/${img}.jpg`}
          key={`fbImg${index}`}
          index={index}
          hidden={hidden.indexOf(index) !== -1}
          onClick={(i) => onClickImg(i)}
        />
      )}
    { /*language=CSS*/ }
    <style jsx>{`
        .img-wrapper {
            display: grid;
            margin: 20px 0;
            flex: 1;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 20px;

            justify-items: center;
        }
    `}</style>
  </div>
)