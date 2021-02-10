import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Just do IT" description="Kota Kanazawa's Dev Blog" />
      <ul>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <li key={node.blogId}>
            <Link to={`/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
          body
          slug
          publishedAt
        }
      }
    }
  }
`
