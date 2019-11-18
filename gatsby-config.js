module.exports = {
  siteMetadata: {
    title: "Kris &amp; Rachael Get Married"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kris & Rachael Get Married",
        short_name: "Kris & Rachael",
        start_url: "/",
        background_color: "#f7f17e",
        theme_color: "#f7f17e",
        display: "standalone",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-26065780-32",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    "gatsby-plugin-offline"
  ]
};
