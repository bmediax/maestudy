import React from 'react'
import { motion } from 'framer-motion'
import * as linkBtmBannerStyles from './LinkBtmBannerModule.module.scss'
import { BsArrowUpShort } from 'react-icons/bs'

const LinkBtmBannerModule = () => {
    return (
        <motion.a initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ delay:.4, duration:.8 }} href="https://www.stopasianhate.info/" className={linkBtmBannerStyles.bannerModule}>
            <p>#StopAsianHate</p>
            <BsArrowUpShort />
        </motion.a>
    )
}

export default LinkBtmBannerModule