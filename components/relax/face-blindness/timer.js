import dynamic from "next/dynamic";

const CountDown = dynamic(import('react-countdown-clock'))

export default ({ paused, onComplete }) => (
  <div>
    <CountDown seconds={4}
               color="#333"
               alpha={0.7}
               size={200}
               paused={paused}
               onComplete={onComplete} />
  </div>
)