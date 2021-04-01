import React from 'react'
import { motion } from 'framer-motion'
import * as linkheaderStyles from './LinkHeader.module.scss'
import LinkSocialMedia from '../LinkSocialMedia/LinkSocialMedia'
import { StaticImage } from "gatsby-plugin-image"
import maeStudyBanner from '../../../images/gfx/maestudy-banner.gif'

const LinkHeader = () => {
    return (
        <div className={linkheaderStyles.linkHeader}>
            <motion.div initial={{ y: 100, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: 'spring', damping:8, stiffness:100 }} className={linkheaderStyles.profilePic}>
                <StaticImage src='../../../images/gfx/maestudy-logo.png' alt="Mae Study Profile Picture" loading="eager" placeholder="blurred" />
            </motion.div>
            <div className={linkheaderStyles.profileSide}>
                <img src={maeStudyBanner} alt="Mae Study Banner" />
                <LinkSocialMedia />
            </div>
        </div>
    )
}

export default LinkHeader