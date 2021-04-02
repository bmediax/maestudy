import React from 'react'
import { motion } from 'framer-motion'
import * as linkObjectStyle from './LinkObject.module.scss'
import { bottonTopVariant } from '../../../data/variants/buttonVariants'

const LinkObject = ({title, link}) => {
    return (
        <motion.a href={link} 
            className={linkObjectStyle.linkBtn} 
            initial={'hidden'} 
            animate={'visible'}
            transition={{ type: 'spring', damping:30, stiffness:120 }}
            variants={bottonTopVariant}> 
                {title} 
        </motion.a>
    )
}

export default LinkObject