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
        background_color: "#bfe8e3",
        theme_color: "#bfe8e3",
        display: "standalone",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125840021-1",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    "gatsby-plugin-offline"
  ]
};
