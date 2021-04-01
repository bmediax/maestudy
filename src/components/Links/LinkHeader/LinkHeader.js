import React from 'react'
import * as linkheaderStyles from './LinkHeader.module.scss'
import LinkSocialMedia from '../LinkSocialMedia/LinkSocialMedia'
import { StaticImage } from "gatsby-plugin-image"

const LinkHeader = () => {
    return (
        <div className={linkheaderStyles.linkHeader}>
            <div className={linkheaderStyles.profilePic}>
                <StaticImage src='../../../images/gfx/maestudy-logo.png' alt="Mae Study Profile Picture" loading="eager" placeholder="blurred" />
            </div>
            <LinkSocialMedia />
        </div>
    )
}

export default LinkHeader