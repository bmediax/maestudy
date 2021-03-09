import React from 'react'
import { Helmet } from "react-helmet"
import '../styles/_reset.scss'
import '../styles/_base.scss'

const Layout = ( {children, title} ) => {
    return (
        <main>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div id="content">
                {children}
            </div>
        </main>
    )
}

export default Layout