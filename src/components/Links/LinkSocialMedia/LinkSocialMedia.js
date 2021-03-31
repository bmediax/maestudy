import React from 'react'
import * as linkSocialStyles from './LinkSocialMedia.module.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'

const LinkSocialMedia = () => {
    return (
        <div className={linkSocialStyles.socialMedia}>
            <span className={linkSocialStyles.socials}><HiOutlineMail /></span>
            <span className={linkSocialStyles.socials}><AiOutlineInstagram /></span>
            <span className={linkSocialStyles.socials}><AiFillYoutube /></span>
            <span className={linkSocialStyles.socials}><FaPinterest /></span>
        </div>
    )
}

export default LinkSocialMedia