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
    { /*language=CSS*/ }
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
        transition: opacity .6s;

        overflow: hidden;
      }
      .img-container .mask h1 {
        color: white;
        font-size: 150px;
        font-weight: normal;
      }
      .img-container img {
        max-height: 100%;
        max-width: 100%;
        /*object-fit: cover;*/
      }`}
    </style>
  </div>
)

export default ImgContainer