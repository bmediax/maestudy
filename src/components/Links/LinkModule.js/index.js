import React from 'react'
import LinksSection from '../../../layout/LinksSection'
import LinkObject from '../LinkObject'
// import * as linkModuleStyle from './linkModule.module.scss'
// import { linksData } from '../../../data/linksData'

const LinkModule = ({ linksModule }) => {
    return (
        <LinksSection>
            <div>
                {linksModule
                .sort((pin, nopin) => nopin.is_pinned - pin.is_pinned)
                .map((links, index) => (
                    <LinkObject key={index} 
                        isPinned={links.is_pinned}
                        linksTitle={links.links_title}
                        linksUrl={links.links_url}
                        />
                ))}
            </div>
        </LinksSection>
    )
}

export default LinkModule