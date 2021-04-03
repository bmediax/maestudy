import React from 'react'
import { motion } from 'framer-motion'
import * as linkObjectStyle from './LinkObject.module.scss'
import { bottonTopVariant } from '../../../data/variants/buttonVariants'
import * as variables from '../../../styles/_variables.module.scss'

const LinkObject = ({title, link, icon, isPinned}) => {
    return (
        <motion.div 
        className={linkObjectStyle.linkItemWrap} 
        initial={'hidden'} 
        animate={'visible'}
        transition={{ type: 'spring', damping:30, stiffness:120 }}
        variants={bottonTopVariant}>
            <motion.a href={link} 
                className={linkObjectStyle.linkBtn}
                style={{ background : isPinned ? variables.quirkColor : null }}>
                    { icon && 
                    <motion.span drag="x" dragConstraints={{ left: 0, right: 300 }} initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type: 'spring', damping:30, stiffness:150 }} className={linkObjectStyle.linkIcon}>
                        {icon}
                    </motion.span>}
                    <span>{title}</span>
            </motion.a>
        </motion.div>
    )
}

export default LinkObject