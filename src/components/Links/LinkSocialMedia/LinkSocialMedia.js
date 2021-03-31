import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import * as linkSocialStyles from './LinkSocialMedia.module.scss'
import { SocialMediaContext } from '../../../data/context/SocialMediaContext'

const LinkSocialMedia = () => {
    const [ socialMedia ] = useContext(SocialMediaContext)
    const buttonVariants = {
        hidden: {
            y:100,
            scale: 0,
            opacity:0
        },
        visible: {
            y:0,
            scale: 1,
            opacity:1
        }
    }
    return (
        <div className={linkSocialStyles.socialMedia}>
            {socialMedia.map(socials => (
                <motion.a href={socials.link} 
                className={linkSocialStyles.socials} 
                whileTap={{ scale:.9 }} 
                key={socials.id}
                initial='hidden'
                animate='visible'
                variants={buttonVariants}
                transition={{ type: 'spring', damping:10, stiffness:80 }}
                >
                    {socials.icon}
                </motion.a>
            ))}
        </div>
    )
}

export default LinkSocialMedia