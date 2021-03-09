import React from 'react'
import { Helmet } from "react-helmet"
import '../styles/_reset.scss'

const Layout = ( {children, title} ) => {
    return (
        <main>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </main>
    )
}

export default Layout