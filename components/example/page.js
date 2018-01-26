import Link from 'next/link'
import { Button, List, InputItem } from 'antd-mobile'

import AddCount from '../add-count'
import Clock from '../clock'
import MainLayout from '../layouts/main-layout'

function Page ({error, lastUpdate, light, linkTo, placeholderData, title}) {
  return (
    <MainLayout>
      <List>
        <Link href={linkTo}>
          <Button>Navigate</Button>
        </Link>
        <InputItem
          type="bankCard"
          placeholder="start from left"
          clear
          moneyKeyboardAlign="left"
        >银行卡号</InputItem>
      </List>
      <h1>
        {title}
      </h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      {placeholderData &&
      <pre>
          <code>
            {JSON.stringify(placeholderData, null, 2)}
          </code>
        </pre>}
      {error &&
      <p style={{color: 'red'}}>
        Error: {error.message}
      </p>}
    </MainLayout>
  )
}

export default Page
