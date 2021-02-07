import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// TODO: SEO設定
// import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    {/* TODO: <SEO title={data.microcmsBlog.title} /> */}
    <h1>{data.microcmsBlog.title}</h1>
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
      title
      body
      slug
    }
  }
`
