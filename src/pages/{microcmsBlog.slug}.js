import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.microcmsBlog.title}
      description={data.microcmsBlog.description}
      slug={data.microcmsBlog.slug}
    />
    <h1>{data.microcmsBlog.title}</h1>
    <span>{data.microcmsBlog.publishedAt}</span>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.body}`,
      }}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      description
      title
      body
      slug
      publishedAt
    }
  }
`
