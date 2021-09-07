import React from "react"
import { Link } from "gatsby"
// import ProductMeta from "./ProductMeta"
// import ProductCategories from "./ProductCategories"
import FeaturedMedia from "./FeaturedMedia"

const ProductPreview = ({ product, isLast }) => {
  return (
    <>
      <li
        className={`product-${product.databaseId} product type-product status-publish format-standard has-product-thumbnail hentry category-uncategorized ${isLast?'last':''}`}
        id={`product-${product.databaseId}`}
      >
       

       <Link
                to={'/product/' + product.slug}
    >

        <FeaturedMedia image={product.image} />
            <h2 className="woocommerce-loop-product__title">
             {product.name}
         
            </h2>

          
</Link>




      </li>

    </>
  )
}

export default ProductPreview
