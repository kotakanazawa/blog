require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Hope Invites",
    description: "Kota Kanazawa's dev blog",
    author: "Kota Kanazawa"
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
  ],
}
