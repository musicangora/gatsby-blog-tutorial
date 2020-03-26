module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'これは私のブログです',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}