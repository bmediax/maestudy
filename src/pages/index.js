import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'
import Layout from '../layout'
import * as comingStyles from '../styles/comingSoon.module.scss'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

// markup
const IndexPage = () => {
  return (
    <Layout title="Coming Soon | Mae Study">
      <div className={comingStyles.comingsoon}>
        <motion.h1 initial={{ y:50 }} animate={{ y:0 }} transition={{ delay: 0.05, type: 'spring' }}> Coming Soon </motion.h1>
        <motion.div 
          initial={{ y:100 }} 
          animate={{ y:0 }} 
          transition={{ type:'spring', damping: 10 }}
          whileHover={{ scale: 1.05 }}>
          <StaticImage src="../images/gfx/maestudy-logo.png" alt="Mae Study Logo" imgClassName="logo" width={400} placeholder="BLURRED" />
        </motion.div>
        <motion.div initial={{ y:100 }} 
          animate={{ y:0 }} 
          transition={{ type:'spring', damping: 10, stiffness:80 }}
          whileHover={{ scale: 1.05 }} 
          className={comingStyles.smicons}>
            <a href="mailto:hello@maestudy">
                <MdEmail />
            </a>
            <a href="https://instagram.com/maestudy">
                <AiFillInstagram />
            </a>
            <a href="https://twitter.com/maestudy">
                <AiFillYoutube />
            </a>
        </motion.div>
      </div>
    </Layout>
  )
}

export default IndexPage