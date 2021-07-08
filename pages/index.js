import Head from 'next/head'
import Link from "next/link"
import { client } from "../libs/client"
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import SEO from '../components/seo'

export default function Home({ blogs }) {
  return (
    <Layout home>
      <SEO />
      <section className={utilStyles.headingMd}>
        <p>夫&2児の父。Webアプリケーションエンジニアのブログです。Ruby, React, TypeScript, GraphQL, Next.jsなどに興味があります。</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {blogs.map((blog) => (
            <li className={utilStyles.listItem} key={blog.id}>
              <Link href={`/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <div className={utilStyles.lightText}>
                  <Date dateString={blog.createdAt} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })
  return {
    props: {
      blogs: data.contents,
    },
  }
}
