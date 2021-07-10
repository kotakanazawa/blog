import { client } from "../libs/client"
import Layout from '../components/layout'
import Date from '../components/date'
import SEO from '../components/seo'
import utilStyles from '../styles/utils.module.css'
import cheerio from "cheerio"
import hljs from "highlight.js"
import "highlight.js/styles/a11y-dark.css"

export default function BlogId({ blog }) {

  const $ = cheerio.load(blog.body)
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass("hljs")
  })
  const html = $.html()

  return (
    <Layout>
      <SEO
        title={blog.title}
        description={blog.description}
      />
      <article>
        <h1 className={utilStyles.headingXl}>{blog.title}</h1>
        <div className={utilStyles.lightText}>
          公開: <Date dateString={blog.createdAt} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
          />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" })
  const paths = data.contents.map((content) => `/${content.id}`)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: "blog", contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
