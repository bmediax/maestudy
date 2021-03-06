import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'
import Layout from '../layout'
import * as comingStyles from '../styles/comingSoon.module.scss'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const headerVariants = {
  hidden: { 
    y:50,
    opacity: 0,
  },
  visible: {
     y:0,
     opacity: 1,
  },
}

const imageVariants = {
  hidden: {
    y:250,
    opacity: 0
  },
  visible: {
    y:0,
    opacity: 1
  }
}

const socialVariants = {
  hidden: {
    y:100,
    opacity:0,
    scale:0
  },
  visible: {
    y:0,
    opacity:1,
    scale:1
  }
}

// markup
const IndexPage = () => {
  return (
    <Layout title="Coming Soon | Mae Study">
      <div className={comingStyles.comingsoon}>
        <motion.h1 initial="hidden" animate="visible" transition={{ delay: 0.05, type: 'spring' }} variants={headerVariants}> Coming Soon </motion.h1>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ type:'spring', damping: 10 }}
          whileHover={{ scale: 1.05 }}>
          <StaticImage src="../images/gfx/maestudy-logo.png" alt="Mae Study Logo" imgClassName="logo" width={400} placeholder="BLURRED" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={socialVariants}
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