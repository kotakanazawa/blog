import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BIO from "../components/bio"

const BlogPage = ({ data, location }) => {
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
          __html: `${data.microcmsBlog.body}`,
        }}
      />
      <BIO />
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
