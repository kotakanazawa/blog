require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Just do IT`,
    description: `Kota Kanazawa's dev blog`,
    author: `Kota Kanazawa`,
    // TODO: src直下じゃないほうがいいかも. static下にしたほうがいいかも
    image: "./src/images/face.jpg",
    lang: `ja`,
    // TODO: ドメイン取る
    url: `localhost:8000`,
    twitter: `KanazawaKoh`,
    github: `kotakanazawa`,
  },
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: process.env.SERVICE_ID,
        apis: [
          {
            endpoint: "blog",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
