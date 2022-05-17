import React from 'react'
import "../styles/products.css"

const Product = ({product}) => {
  return (
    <div className = "product-container">
        <div className = "product-image"><img alt = "Product" src = {product.imgUrl} height = "120px" width = "120px"/></div>
        <div className = "product-information-container">
            <div className = "product-name"><p>{product.name}</p></div>
            <div className = "product-description"><p>{product.description}</p></div>
            <div className = "product-price"><p>${product.price}</p></div>
        </div>
        <div className = "product-buttons-container">
            
            <button className = "product-button" type = "button">Add to cart</button>
        </div>
    </div>
  )
}

export default Product