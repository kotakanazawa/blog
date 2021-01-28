import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header() {
  return (
    <header>
      <Link to="/">
        HOME
      </Link>
    </header>
  )
}
