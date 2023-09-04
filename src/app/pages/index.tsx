import type { ReactElement } from 'react'
import Layout from '../components/AppLayout/AppLayout'
import type { NextPageWithLayout } from './_app'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main>{page}</main>
    </Layout>
  )
}
 
export default Page