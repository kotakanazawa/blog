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
          siteUrl
          locale
        }
      }
    }
  `)

  const title = props.title
    ? `${props.title} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = props.description || data.site.siteMetadata.description

  const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl

  const ogpUrl = `${data.site.siteMetadata.siteUrl}/ogp.jpg`

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />
      <meta property="og:image" content={ogpUrl} />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:image" content={ogpUrl} />
    </Helmet>
  )
}
