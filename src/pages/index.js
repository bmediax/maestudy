import * as React from "react"
import Layout from '../layout'
import { StaticImage } from "gatsby-plugin-image"
import Socialmedia from '../components/Socialmedia'

// markup
const IndexPage = () => {
  return (
    <Layout title="Homepage">
      <h1> Coming Soon </h1>
      <StaticImage src="../images/gfx/maestudy-logo.png" alt="Mae Study Logo" width={400} placeholder="BLURRED" />
      <Socialmedia />
    </Layout>
  )
}

export default IndexPage