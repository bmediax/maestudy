import React from 'react'
import LinksSection from '../../../layout/LinksSection'
import LinkObject from '../LinkObject'
import * as linkModuleStyle from './linkModule.module.scss'
import { linksData } from '../../../data/linksData'

const LinkModule = () => {
    return (
        <LinksSection>
            <div className={linkModuleStyle.linkModule}>
                {linksData.map(links => (
                    <LinkObject title={links.title} key={links.id} />
                ))}
            </div>
        </LinksSection>
    )
}

export default LinkModule