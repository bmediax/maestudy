import * as React from "react"
import Layout from '../layout'
import LinkHeader from '../components/Links/LinkHeader/LinkHeader'
import LinkLatestVideo from '../components/Links/LinkLatestVideo'
import LinkModule from "../components/Links/LinkModule.js"

// markup
const Links = () => {
  return (
    <Layout title="Mae Study Links" ade="links">
      <LinkHeader />
      <LinkLatestVideo />
      <LinkModule />
    </Layout>
  )
}

export default Links