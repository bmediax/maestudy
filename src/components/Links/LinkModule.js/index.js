import React from 'react'
import LinksSection from '../../../layout/LinksSection'
import LinkObject from '../LinkObject'
// import * as linkModuleStyle from './linkModule.module.scss'
import { linksData } from '../../../data/linksData'

const LinkModule = () => {
    return (
        <LinksSection>
            <div>
                {linksData
                .sort((pin, nopin) => nopin.isPinned - pin.isPinned)
                .map(links => (
                    <LinkObject title={links.title} key={links.id} link={links.link} icon={links.icon} />
                ))}
            </div>
        </LinksSection>
    )
}

export default LinkModule