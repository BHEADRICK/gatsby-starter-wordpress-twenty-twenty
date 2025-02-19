require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Twenty Twenty`,
    description: `Gatsby starter site for Twenty Twenty Gatsby Theme.`,
    author: `@henrikwirth`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
  
    `gatsby-plugin-image`,
    `gatsby-plugin-notifications`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        schema: {
      perPage: process.env.WP_PER_PAGE>0?process.env.WP_PER_PAGE:20, // currently set to 100
      requestConcurrency: process.env.WP_CONCURENCY>0?process.env.WP_CONCURRENCY:5, // currently set to 15
      previewRequestConcurrency: process.env.WP_PREVIEW_CONCURRENCY>0?process.env.WP_PREVIEW_CONCURRENCY:2, // currently set to 5
    },
        url: process.env.WPGRAPHQL_URL,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        html: {
          fallbackImageMaxWidth: 800,
        },
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Customer: {
        exclude: true
          },
          Order: {
            exclude: true
          },
          PostFormat: {
            exclude: true
          },
          ShippingMethod: {
            exclude: true
          }, ShippingClass: {
            exclude: true
          }, Refund: {
            exclude: true
          }, UserRole: {
            exclude: true
          }, PaymentGateway: {
            exclude: true
          }, Coupon: {
            exclude: true
          }, TaxRate: {
            exclude: true
          }, VisibleProduct: {
            exclude: true
          },
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  35
                : // And then we can pull all posts in production
                  null,
          },
          // this shows how to exclude entire types from the schema
          // this example is for wp-graphql-gutenberg
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
  ],
}
