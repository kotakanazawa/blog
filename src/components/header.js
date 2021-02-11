import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/header.css"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="header">
      <Link to={`/`}>{data.site.siteMetadata.title}</Link>
    </header>
  )
}
