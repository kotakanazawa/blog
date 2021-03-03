import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} <Link to={`/`}>Just Do IT</Link>
    </footer>
  )
}
