import QueueAnim from 'rc-queue-anim';
import ImgContainer from './img-container'

export default ({ imgQue, imgSetIndex, hidden, onClickImg }) => (
  <div className="img-wrapper">
    <QueueAnim
      delay={50}
      duration={300}
      className="queue-simple"
      // type={['right', 'left']}
      animConfig={[
        { opacity: [1, 0], translateY: [0, 30] },
        { opacity: [1, 0], translateY: [0, -30] }
      ]}
      ease={['easeOutQuart', 'easeInOutQuart']}>
      {imgQue.map((img, index) =>
        <ImgContainer
          src={`/static/img/face-blind/${imgSetIndex}/${img}.jpg`}
          key={`fbImg${index}`}
          index={index}
          hidden={hidden.indexOf(index) !== -1}
          onClick={(i) => onClickImg(i)}
        />
      )}
    </QueueAnim>
    { /*language=CSS*/ }
    <style global jsx>{`
      .img-wrapper {
          width: 100%;
          margin: 20px 0;
      }
        .img-wrapper .queue-simple {
        height: 100%;
            display: grid;

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