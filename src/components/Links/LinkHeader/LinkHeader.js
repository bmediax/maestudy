import React from 'react'
import * as linkheaderStyles from './LinkHeader.module.scss'

const LinkHeader = () => {
    return (
        <div className={linkheaderStyles.linkHeader}>
            <div className={linkheaderStyles.profilePic}></div>
            <div className={linkheaderStyles.socialMedia}></div>
        </div>
    )
}

export default LinkHeader