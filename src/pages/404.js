import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ location }) => {
  return (
    <Layout>
      <SEO
        title="ページが見つかりません(404エラー)"
        pagepath={location.pathname}
      />
      <h1 style={{ padding: `20vh 0`, textAlign: `center` }}>お探しのページが見つかりませんでした。ごめんなさい。</h1>
    </Layout>
  )
}
