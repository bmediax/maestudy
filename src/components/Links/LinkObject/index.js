import React from 'react'
import { RichText } from 'prismic-reactjs'
import { motion } from 'framer-motion'
import { AiFillPushpin as Icon } from 'react-icons/ai'
import * as linkObjectStyle from './LinkObject.module.scss'
import { bottonTopVariant } from '../../../data/variants/buttonVariants'
import * as variables from '../../../styles/_variables.module.scss'

const LinkObject = ({isPinned, linksTitle, linksUrl}) => {
    return (
        <motion.div 
        className={linkObjectStyle.linkItemWrap} 
        initial={'hidden'} 
        animate={'visible'}
        transition={{ type: 'spring', damping:30, stiffness:120 }}
        variants={bottonTopVariant}>
            <motion.a href={linksUrl.url} 
                className={linkObjectStyle.linkBtn}
                style={{ background : isPinned ? variables.quirkColor : null }}>
                    { isPinned && 
                    <motion.span drag="x" dragConstraints={{ left: 0, right: 300 }} initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type: 'spring', damping:30, stiffness:150 }} className={linkObjectStyle.linkIcon}>
                        <Icon />
                    </motion.span>}
                    <span>
                        {RichText.asText(linksTitle.raw)}
                    </span>
            </motion.a>
        </motion.div>
    )
}

export default LinkObject