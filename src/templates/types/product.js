import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
// import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"

// import productCategories from "../../components/productCategories"

const product = ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    name,
    slug,
    description,
    image,
    shortDescription,
    databaseId,
  } = page
  const uri = '/product/' + slug

  return (
    <Layout
      bodyClass={`product-template-default single single-product productid-${databaseId} single-format-standard wp-embed-responsive singular has-product-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >


      <article
        className={`product-${databaseId} product type-product status-publish format-standard has-product-thumbnail hentry category-uncategorized`}
        id={`product-${databaseId}`}
      >
        <header className="entry-header has-text-align-center header-footer-group">
          <div className="entry-header-inner section-inner medium">
            {/* <productCategories categories={categories} /> */}
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: name }}
            />
        
        <FeaturedMedia image={image} />
            <div
              className="intro-text section-inner max-percentage small"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
            {/* <postMeta title={title} /> */}
          </div>
        </header>


        <div className="product-inner thin">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="section-inner">
 
 

        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query product($id: String!) {
    page: wpProduct(id: { eq: $id }) {
      ...ProductContent
    }
  }
`

export default product;
