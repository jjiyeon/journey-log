module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: `${__dirname}/src/contents/post`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "about",
        path: `${__dirname}/src/contents/about`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
};
