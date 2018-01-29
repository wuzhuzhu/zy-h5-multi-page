import Lottie from 'react-lottie'
import * as animationData from "./cry-emoji";

export default ({
  isStopped,
  onClick
                }) => {
  const defaultOptions = {
    // loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="wrapper" onClick={onClick}>
      <Lottie
        options={defaultOptions}
        height={350}
        width={350}
        isStopped={isStopped}
        // isPaused={isPaused}
      />
      { /*language=CSS*/ }
      <style jsx>{`
        .wrapper {
            margin: -75px;
            cursor: pointer;
        }
        .wrapper div {
            margin: -75px;
        }
      `}</style>
    </div>
  )

}