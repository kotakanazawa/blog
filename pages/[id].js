import { client } from "../libs/client"

export default function BlogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.createdAt}に公開 {blog.updatedAt}に更新</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
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
