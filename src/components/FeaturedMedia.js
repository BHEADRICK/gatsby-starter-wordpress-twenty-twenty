import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FeaturedMedia = ({ image }) => {

  if(image?.node){

    const imageData = getImage(image?.node?.localFile)

    if (!imageData) return null
  
    return (
      <div className="featured-media">
        <div className="featured-media-inner section-inner has-text-align-center">
          <GatsbyImage alt={image.node.altText} image={imageData}
                       className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
          />
        </div>
      </div>
    )
  }else{

    const imageData = getImage(image?.localFile)

    if (!imageData) return null
  
    return (
      <div className="featured-media">
        <div className="featured-media-inner section-inner has-text-align-center">
          <GatsbyImage alt={image.altText} image={imageData}
                       className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
          />
        </div>
      </div>
    )

  }




}

export default FeaturedMedia
