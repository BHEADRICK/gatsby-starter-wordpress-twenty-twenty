import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout"
// import Seo from "../components/Seo"
// import FeaturedMedia from "../components/FeaturedMedia"
// import ProductList from "../components/productList"
import ProductPreview from "../../../components/ProductPreview"
// import { ProductCard } from "../components/product-card"
// import { Filters } from "../components/filters"

const Shop = ({data,pageContext}) => {

  const {
    allWpProduct: {
      nodes
    }
  } = data







   return (
    <Layout
      bodyClass={`page-template-default page page-shop wp-embed-responsive  has-no-pagination not-showing-comments footer-top-visible customize-support`}
    >
   



 


     <div id="primary" class="content-area">
            <ul class="products columns-3">

{nodes &&
     nodes.map((product, index) => {
        return (
          <ProductPreview
            key={index}
            product={product}
            isLast={index%3 === 2}
          />
        )
      })}
</ul>
  
</div>
    </Layout>
  );




}
export const query = graphql`query ($slug: String!)
{
  allWpProduct(
    filter: {productCategories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}
  ) {
    nodes {
      id
      slug
      name
      databaseId
      image {
        altText
        localFile {
          ...HeroImage
          publicURL
        }
        mediaDetails {
          width
          height
        }
      }
    }
  }
}
`


export default Shop;
