module.exports = {
  siteMetadata: {
    title: "maestudy",
    siteUrl: `https://maestudy.com`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
