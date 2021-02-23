import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import cheerio from "cheerio"
import hljs from "highlight.js"
import "highlight.js/styles/agate.css"

const BlogPage = ({ data, location }) => {
  const $ = cheerio.load(data.microcmsBlog.body)
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass("hljs")
  })
  const html = $.html()

  return (
    <Layout>
      <SEO
        title={data.microcmsBlog.title}
        description={data.microcmsBlog.description}
        pagepath={location.pathname}
      />
      <h1>{data.microcmsBlog.title}</h1>
      <span>{data.microcmsBlog.publishedAt}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Bio />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      description
      title
      body
      slug
      publishedAt(formatString: "YYYY年MM月DD日")
    }
  }
`
