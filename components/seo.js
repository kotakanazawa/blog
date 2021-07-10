import Head from 'next/head'
import config from '../config'

export default function SEO({ description, title }) {
  const siteTitle = title
    ? `${title} | ${config.title}`
    : `${config.title}`

  const siteDescription = description || config.description

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content="/images/ogp.jpg" />
      <meta property="og:site_name" content={config.title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
    </Head>
  )
}
