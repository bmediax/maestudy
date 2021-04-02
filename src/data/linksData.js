import React from 'react'
import { AiFillPushpin as Pin }from 'react-icons/ai'
import { CgShoppingBag as Shop } from 'react-icons/cg'

// Type icon variety
// - Pin
// - Sponsored
// - Store
// - Newsletter ( Make Interactive )

export const linksData = [
    {
        title: 'Subscribe Now!',
        link: 'https://www.youtube.com/channel/UCbtfEYwfzigTidiqd6XDBcQ',
        isPinned: true,
        icon: <Pin />,
        id: 1
    },
    {
        title: 'Subscribe to my YT Channel!',
        link: 'https://www.youtube.com/channel/UCbtfEYwfzigTidiqd6XDBcQ',
        isPinned: true,
        icon: <Shop />,
        id: 2
    },
    {
        title: 'Subscribe to my YT Channel!',
        link: 'https://www.youtube.com/channel/UCbtfEYwfzigTidiqd6XDBcQ',
        isPinned: true,
        icon: null,
        id: 3
    }
]