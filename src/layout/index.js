import React from 'react'
import { Helmet } from "react-helmet"
import '../styles/_reset.scss'
import '../styles/global.scss'

const Layout = ( {children, title} ) => {
    return (
        <main>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="content">
                {children}
            </div>
        </main>
    )
}

export default Layout