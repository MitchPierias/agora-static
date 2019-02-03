module.exports = {
  siteMetadata: {
    title: 'Agora',
    description: 'Simple File Conversion Application',
    author: 'Mitch Pierias',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-96x96.png'
      },
    }, {
      resolve: 'gatsby-plugin-s3',
      options: {
          bucketName: 'agora.pierias.com',
          protocol: "https",
          hostname: "agora.pierias.com"
      }
    }
  ]
}
