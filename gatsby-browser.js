import React from 'react'
import { SocialMediaProvider } from './src/data/context/SocialMediaContext'

export const wrapRootElement = ({element}) => (
    <SocialMediaProvider>
        {element}
    </SocialMediaProvider>
)