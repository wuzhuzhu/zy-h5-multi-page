import Link from 'next/link'

import AddCount from '../add-count'
import Clock from '../clock'
import Layout from '../layouts/clean-layouts'

function Page ({error, lastUpdate, light, linkTo, placeholderData, title}) {
  return (
    <Layout>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
      <h1>
        {title}
      </h1>
    </Layout>
  )
}

export default Page
