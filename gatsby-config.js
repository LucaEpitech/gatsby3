require("dotenv").config({
path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `marx ecommerce`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aaik84qsr5ui`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `2eG5nz-pOUDTzopSxQovCvuBAC6XCoGV7vDS2UPUK0w`,
      },
    },
    {
      resolve:`gatsby-plugin-snipcart`,
      options:{
        apiKey: `NjAxYmQwNGItZWZkYy00YjhjLThlMzQtYTc0MTg4YjYwOWE1NjM3NDU5Mjg1Njg1OTM4NDA1`,
        autopop: true
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

