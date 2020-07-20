module.exports = {
  siteMetadata: {
    title: `Tam Le | Full-Stack Developer`,
    description: `Tam Le, full-stack web developer based in Alberta, Canada with a passion for design, development, and teaching.`,
    siteUrl: "https://tamxle.com",
    keywords: "Tam Le, Tam, Le, philosocode, web developer, full-stack developer, software engineer, javascript, react, nodejs",
    author: "@Philosocode"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato\:400,700`,
          `noto sans\:400,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TamLe`,
        short_name: `TamLe`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#303030`,
        display: `minimal-ui`,
        icon: `src/images/blaze-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173067610-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
