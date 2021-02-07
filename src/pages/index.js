import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PostLink from "../components/post-link"

export default function Home({ data }) {
  return (
    <Layout>
      <ul>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <li key={node.blogId}>
            <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <PostLink />
      <PostLink />
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
