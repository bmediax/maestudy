module.exports = {
  siteMetadata: {
    title: "MaeStudy",
    titleTemplate: "Mae Study",
    siteUrl: 'https://maestudy.com',
    description:
      "I like hand-lettering in all type of medium (and hoarding art supply ☺️)",
    url: "https://maestudy.com", // No trailing slash allowed!
    image: "/images/banner.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@maestudy",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mae Study`,
        short_name: `MaeStudy`,
        start_url: `/`,
        background_color: `#f6a998`,
        theme_color: `#f6a998`,
        display: `standalone`,
        icon: `src/images/gfx/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'maestudy',
        schemas: {
           links: require("./custom_types/links.json"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-SXQVZRSNY9", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
