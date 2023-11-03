import React from 'react'
import Header from "../Header/Header.jsx"

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <footer>footer</footer>
        </>
    )
}

export default Layout