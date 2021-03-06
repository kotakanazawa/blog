import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Just do IT" description="Kota Kanazawa's Dev Blog" />
      <div className="post-block">
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <div key={node.blogId} className="post-block__title">
            <Link to={`/${node.blogId}`}>{node.title}</Link>
            <p className="post-block__publish-date">{node.createdAt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          blogId
          title
          body
          createdAt(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
