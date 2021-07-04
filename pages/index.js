import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blogs }) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};
