import React from 'react'
import { motion } from 'framer-motion'
import * as linkheaderStyles from './LinkHeader.module.scss'
import LinkSocialMedia from '../LinkSocialMedia/LinkSocialMedia'
import LinksSection from '../../../layout/LinksSection'

const LinkHeader = ({ bannerImage, profileImage }) => {
    return (
        <LinksSection>
            <div className={linkheaderStyles.linkHeader}>
                <motion.div initial={{ y: 100, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: 'spring', damping:8, stiffness:100 }} className={linkheaderStyles.profilePic}>
                    <img src={profileImage.fluid.src} alt={profileImage.alt} width="auto" style={{maxWidth: "200px"}}/>
                </motion.div>
                <div className={linkheaderStyles.profileSide}>
                    <motion.div initial={{ y:100 }} animate={{ y:0 }} transition={{ type: 'spring', damping:8, stiffness:80 }}>
                        <img src={bannerImage.url} alt={bannerImage.alt} />
                    </motion.div>
                    <LinkSocialMedia />
                </div>
            </div>
        </LinksSection>
    )
}

export default LinkHeader