import React from 'react'
// import { Helmet } from "react-helmet"
import Seo from '../components/Seo'
import '../styles/_reset.scss'
import '../styles/global.scss'

const Layout = ( {children, title, ade } ) => {
    return (
        <main>
            <Seo title={title} />
            <div className="content" id={ade}>
                {children}
            </div>
        </main>
    )
}

export default Layout