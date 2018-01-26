import Link from 'next/link'
import css from 'styled-jsx/css'

const style = css`
  p {
    color: red;
  }
`

export default () => (
  <div className='wrapper'>
    <style jsx>{style}</style>
    <p>专治脸盲1</p>
  </div>
)

