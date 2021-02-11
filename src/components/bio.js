import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className="bio">
      {/* TODO: 画像と軽い自己紹介作成 */}
      <span>written by {data.site.siteMetadata.author}</span>
    </div>
  )
}
