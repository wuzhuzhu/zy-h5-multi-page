import dynamic from "next/dynamic";

const CountDown = dynamic(import('react-countdown-clock'))

export default ({ paused, onComplete, seconds }) => (
  <div>
    <CountDown seconds={seconds}
               color="#333"
               alpha={ 0.7 }
               size={200}
               paused={paused}
               pausedText="||"
               restartOnNewProps
               onComplete={onComplete} />
  </div>
)