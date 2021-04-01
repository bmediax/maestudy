import React from 'react'
import { motion } from 'framer-motion'
import * as LinkVideoStyles from './LinkLatestVideo.module.scss'
import LinksSection from '../../../layout/LinksSection'

const LinkLatestVideo = () => {
    return (
        <LinksSection>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: .7 }} className={LinkVideoStyles.latestVideo}> 
                <img src="https://via.placeholder.com/1335x750?text=Latest%20Video" alt="Latest Mae Study Video" />
            </motion.div>
        </LinksSection>
    )
}

export default LinkLatestVideo