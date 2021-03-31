import React from 'react'
import * as linkheaderStyles from './LinkHeader.module.scss'
import LinkSocialMedia from '../LinkSocialMedia/LinkSocialMedia'

const LinkHeader = () => {
    return (
        <div className={linkheaderStyles.linkHeader}>
            <div className={linkheaderStyles.profilePic}></div>
            <LinkSocialMedia />
        </div>
    )
}

export default LinkHeader