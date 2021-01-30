import React from "react"
import "../styles/footer.css"

export default function Home() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Kota Kanazawa
    </footer>
  )
}
