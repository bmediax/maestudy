import React from 'react'
import * as linkSocialStyles from './LinkSocialMedia.module.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'

const LinkSocialMedia = () => {
    return (
        <div className={linkSocialStyles.socialMedia}>
            <a href="google.com" className={linkSocialStyles.socials}>
                <HiOutlineMail />
            </a>
            <a href="google.com" className={linkSocialStyles.socials}>
                <AiOutlineInstagram />
            </a>
            <a href="google.com" className={linkSocialStyles.socials}>
                <AiFillYoutube />
            </a>
            <a href="google.com" className={linkSocialStyles.socials}>
                <FaPinterest />
            </a>
        </div>
    )
}

export default LinkSocialMedia