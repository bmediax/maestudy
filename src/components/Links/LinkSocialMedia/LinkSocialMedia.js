import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import * as linkSocialStyles from './LinkSocialMedia.module.scss'
import { SocialMediaContext } from '../../../data/context/SocialMediaContext'
import { buttonTopScaleVariant } from '../../../data/variants/buttonVariants'

const LinkSocialMedia = () => {
    const [socialMedia] = useContext(SocialMediaContext)
    return (
        <div className={linkSocialStyles.socialMedia}>
            {socialMedia.map(socials => (
                <motion.a href={socials.link} 
                key={socials.id}
                className={linkSocialStyles.socials} 
                whileHover={{ scale:1.1, y:-5}}
                initial='hidden'
                animate='visible'
                variants={buttonTopScaleVariant}
                transition={{ type: 'spring', damping:10, stiffness:80 }}
                >
                    {socials.icon}
                </motion.a>
            ))}
        </div>
    )
}

export default LinkSocialMedia