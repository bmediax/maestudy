import React from 'react'
import { RichText } from 'prismic-reactjs'
import { motion } from 'framer-motion'
import * as linkBtmBannerStyles from './LinkBtmBannerModule.module.scss'
import { AiOutlineLink } from 'react-icons/ai'

const LinkBtmBannerModule = ({ bottomModule }) => {
    // console.log(bottomModule[0].title.raw[0].text)
    return (
        <React.Fragment>
            {bottomModule.map((btm, index) => (
                <motion.a key={index} initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ delay:.4, duration:.8 }} href={btm.url.url} className={linkBtmBannerStyles.bannerModule}>
                    <p>{RichText.asText(btm.title.raw)}</p>
                    <AiOutlineLink />
                </motion.a>
            ))}
        </React.Fragment>
    )
}

export default LinkBtmBannerModule