import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    {data.site.siteMetadata.title}
  </header>
  )
}
