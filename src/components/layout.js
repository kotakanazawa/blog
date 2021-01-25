import React from "react"
import "../styles/layout.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <main>{children}</main>
        </div>
    )
}

export default Layout
