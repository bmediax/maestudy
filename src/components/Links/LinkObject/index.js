import React from 'react'
import * as linkObjectStyle from './LinkObject.module.scss'

const LinkObject = ({title}) => {
    return (
        <a href="https://google.com" className={linkObjectStyle.linkBtn}> {title} </a>
    )
}

export default LinkObject