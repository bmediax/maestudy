import * as React from "react"
import Layout from '../layout'
import LinkHeader from '../components/Links/LinkHeader/LinkHeader'
import LinkLatestVideo from '../components/Links/LinkLatestVideo'

// markup
const Links = () => {
  return (
    <Layout title="Mae Study Links" ade="links">
      <LinkHeader />
      <LinkLatestVideo />
    </Layout>
  )
}

export default Links