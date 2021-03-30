import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../layout'
import * as comingStyles from '../styles/comingSoon.module.scss'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

// markup
const IndexPage = () => {
  return (
    <Layout title="Coming Soon | Mae Study">
      <div className={comingStyles.comingsoon}>
        <h1> Coming Soon </h1>
        <StaticImage src="../images/gfx/maestudy-logo.png" alt="Mae Study Logo" imgClassName="logo" width={400} placeholder="BLURRED" />
        <div className={comingStyles.smicons}>
            <a href="mailto:hello@maestudy">
                <MdEmail />
            </a>
            <a href="https://instagram.com/maestudy">
                <AiFillInstagram />
            </a>
            <a href="https://twitter.com/maestudy">
                <AiFillYoutube />
            </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage