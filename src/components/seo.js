import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          lang
          url
        }
      }
    }
  `)

  const title = props.title
    ? `${props.title} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = props.description || data.site.siteMetadata.description

  const url = props.slug
    ? `${data.site.siteMetadata.url}/${props.slug}`
    : data.site.siteMetadata.url

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url}></link>
    </Helmet>
  )
}
