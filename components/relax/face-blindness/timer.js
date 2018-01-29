import dynamic from "next/dynamic";

const CountDown = dynamic(import('react-countdown-clock'))

export default ({ paused }) => (
  <div>
    <CountDown seconds={20}
               color="#333"
               alpha={0.7}
               size={200}
               paused={paused}
               onComplete={() => console.log('完成')} />
  </div>
)