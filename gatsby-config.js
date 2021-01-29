/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
    title: 'Rory Macdonald',
    siteUrl: `https://rorymacdonald.co.uk/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Rory-Macdonald-Website",
          short_name: "Rory-Macdonald",
          start_url: "/",
          background_color: "#12120f",
          theme_color: "#fff",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "static/icon.png", // This path is relative to the root of the site.
          // An optional attribute which provides support for CORS check.
          // If you do not provide a crossOrigin option, it will skip CORS for manifest.
          // Any invalid keyword or empty string defaults to `anonymous`
          crossOrigin: `use-credentials`,
        },
      },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/paintings/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'rory-macdonald-v4',
      },
    },
    {
     resolve: `gatsby-plugin-manifest`,
     options: {
       name: `Rory-Macdonald-Website`,
       short_name: `RoryMacdonald`,
       start_url: `/`,
       background_color: `#12120f`,
       theme_color: `#12120f`,
       // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
       // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
       display: `standalone`,
       icon: `src/images/icon.png`, // This path is relative to the root of the site.
     },
   },
   {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      exclude: [`/studio-paintings/*`, `/studio-paintings`],
    },
  },
  ],
}
