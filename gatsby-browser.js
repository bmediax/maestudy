import React from 'react'
import { SocialMediaContext } from './src/data/context/SocialMediaContext'
import { socialMedia } from './src/data/socialmediaData'

export const wrapRootElement = ({element}) => (
    <SocialMediaContext.Provider value={[socialMedia]}>
        {element}
    </SocialMediaContext.Provider>
)