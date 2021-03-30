import React from 'react'
import { Helmet } from "react-helmet"
import '../styles/_reset.scss'
import '../styles/global.scss'

const Layout = ( {children, title, ade } ) => {
    return (
        <main>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="content" id={ade}>
                {children}
            </div>
        </main>
    )
}

export default Layout