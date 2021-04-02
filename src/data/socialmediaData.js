import React from 'react'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export const socialMedia = [
    {
        name: 'Email',
        link: 'mailto:hello@maestudy.com',
        icon: <HiMail />,
        id: 1
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/maestudy',
        icon: <AiOutlineInstagram />,
        id: 2
    },
    {
        name: 'Youtube',
        link: 'https://www.youtube.com/channel/UCbtfEYwfzigTidiqd6XDBcQ',
        icon: <AiFillYoutube />,
        id: 3
    },
    {
        name: 'Pinterest',
        link: 'https://pinterest.com/maestudy',
        icon: <FaPinterest />,
        id: 4
    }
]