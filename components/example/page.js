import Link from 'next/link'

import AddCount from '../add-count'
import Clock from '../clock'
import MainLayout from 'components/layouts/main-layout'

function Page ({error, lastUpdate, light, linkTo, placeholderData, title}) {
  return (
    <MainLayout>
      <h1>
        {title}
      </h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
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
