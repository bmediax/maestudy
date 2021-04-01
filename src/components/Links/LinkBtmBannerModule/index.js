import React from 'react'
import * as linkBtmBannerStyles from './LinkBtmBannerModule.module.scss'
import { BsArrowUpShort } from 'react-icons/bs'

const LinkBtmBannerModule = () => {
    return (
        <div className={linkBtmBannerStyles.bannerModule}> 
            <p>#StopAsianHate</p>
            <BsArrowUpShort />
        </div>
    )
}

export default LinkBtmBannerModule