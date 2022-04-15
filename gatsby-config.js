module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `@directus/gatsby-source-directus`,
          options: {
              url: `https://content.layst.rocks`,
              auth: {
                  token: `)g$@,98@_SG3,5t+`, // Token with minimal permissions to reproduce the issue
              },
          },
      },
  ],
}
