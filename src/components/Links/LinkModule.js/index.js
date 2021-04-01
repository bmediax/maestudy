import React from 'react'
import LinksSection from '../../../layout/LinksSection'
import LinkObject from '../LinkObject'
import * as linkModuleStyle from './linkModule.module.scss'

const LinkModule = () => {
    return (
        <LinksSection>
            <div className={linkModuleStyle.linkModule}>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
                <LinkObject title="Amazon Gift Card Giveaway"/>
            </div>
        </LinksSection>
    )
}

export default LinkModule