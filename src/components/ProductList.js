import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductPreview from "./ProductPreview"

const ProductList = () =>{
    const data = useStaticQuery(graphql`

      {  allWpProduct {
            nodes {
              id
              slug
              name
              databaseId
            }
          }}
  `)



return (
    <section>
      <p>
        <ul>

        {nodes &&
     nodes.map((product, index) => {
        return (
          <ProductPreview
            key={index}
            product={product}
            isLast={index === nodes.length - 1}
          />
        )
      })}
        </ul>
      </p>
    </section>
  )
}

export default ProductList

