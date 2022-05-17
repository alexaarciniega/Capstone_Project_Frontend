import React from 'react'
import "../styles/shoppingcart.css"

const ProductCart = ({productCart}) => {
  return (
    <div className = "product-cart-container">
        <div className = "product-cart-image"><img alt = "Product" src = {productCart.imgUrl} height = "90px" width = "90px"/></div>
        <div className = "product-cart-information-container">
            <div className = "product-cart-name"><p><strong>Product: </strong>{productCart.name}</p></div>
            <div className = "product-cart-price"><p><strong>Price: </strong>{productCart.price}</p></div>
        </div>
        <div className = "product-cart-buttons-container">
            <button className = "product-cart-button" type = "button">Delete</button>
        </div>
    </div>
  )
}

export default ProductCart