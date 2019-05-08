'use strict'

const newLocal = 'gatsby-plugin-sharp';
module.exports = {
  siteMetadata: {
    title: 'madlab',
    description: 'We are MadLab. Giving back designers, developers & creative minds.',
    siteUrl: 'https://madlab.design',
    author: {
      name: 'Blaine Lingard',
      url: 'https://madlab.design',
      email: 'hello@madlab.design'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    newLocal,
    'gatsby-transformer-sharp',
    newFunction(),
    `gatsby-plugin-lodash`
  ]
}
function newFunction() {
  return 'gatsby-plugin-react-helmet';
}

