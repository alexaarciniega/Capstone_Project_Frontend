import React from 'react'
import "../styles/products.css"
import { Link } from "react-router-dom";


const ProductAdmin = ({adminProduct, adminProductId}) => {
  
  
  return (
    <div className = "product-admin-container">
        <div className = "product-admin-image"><img alt = "Product" src = {adminProduct.imgUrl} height = "80px" width = "80px"/></div>
        <div className = "product-admin-information-container">
            <div className = "product-admin-name"><p><strong>Product: </strong>{adminProduct.name}</p></div>
            <div className = "product-admin-price"><p><strong>Price: </strong>${adminProduct.price}</p></div>
        </div>
        <div className = "product-admin-buttons-container">
        
        <Link to={`/admin/create-product/${adminProductId}`}>
            <button className = "product-admin-button" type = "button">Edit</button>
        </Link>
            <button className = "product-admin-button" type = "button">Delete</button>
        </div>
    </div>
  )
}

export default ProductAdmin