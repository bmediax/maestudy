import React from 'react'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Socialmedia = () => {
    return (
        <div className="sm-icons">
            <a href="mailto:hello@maestudy">
                <MdEmail />
            </a>
            <a href="https://instagram.com/maestudy">
                <AiFillInstagram />
            </a>
            <a href="https://twitter.com/maestudy">
                <AiFillYoutube />
            </a>
        </div>
    )
}

export default Socialmedia