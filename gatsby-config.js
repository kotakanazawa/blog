require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Just do IT`,
    description: `Kota Kanazawa's dev blog`,
    author: `Kota Kanazawa`,
    image: "./src/images/face.jpg",
    ogpImage: "./static/ogp.jpg",
    locale: `ja_JP`,
    siteUrl: `https://kanazawa.website/`,
    twitter: `KanazawaKoh`,
    github: `kotakanazawa`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HNFWYLYY7Q"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
  ],
}
