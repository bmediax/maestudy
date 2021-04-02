import React from 'react'
import { motion } from 'framer-motion'
import * as linkObjectStyle from './LinkObject.module.scss'
import { bottonTopVariant } from '../../../data/variants/buttonVariants'

const LinkObject = ({title, link, icon}) => {
    return (
        <motion.div 
        className={linkObjectStyle.linkItemWrap} 
        initial={'hidden'} 
        animate={'visible'}
        transition={{ type: 'spring', damping:30, stiffness:120 }}
        variants={bottonTopVariant}>
            { icon && 
            <span className={linkObjectStyle.linkIcon}>
                <a href="#">{icon}</a>
            </span>
            }
            <motion.a href={link} 
                className={`${linkObjectStyle.linkBtn} ${icon ? linkObjectStyle.linkBtnWithIcon : null}`}
                style={{ textAlign : icon ? 'left' : 'center', paddingLeft : icon ? '20px' : null }}> 
                    {title} 
            </motion.a>
        </motion.div>
    )
}

export default LinkObject