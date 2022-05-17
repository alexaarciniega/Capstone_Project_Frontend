import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { products } from "../resources/data"
import ProductAdmin from "./ProductAdmin"

const ProductsAdmin = () => {
  
  

    const [adminAllProducts, setAdminAllProducts] = useState([]);
  
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8000/product/")
      const data = await res.json()
      setAdminAllProducts(data)
    }
    useEffect(() => {
      fetchProducts()
  
    }, [])

  
    
  return (
    

    <div>
            <Link to = "create-product">
                <button className = "product-create-button" type = "button">Create new product</button>
            </Link>

      <>
    <div className = "products-admin-container">
          {adminAllProducts.map((adminAllProduct => {
            return (
            <ProductAdmin 
              adminProductId = {adminAllProduct._id}
              key = {adminAllProduct._id}
              adminProduct = {adminAllProduct}
              />
            )}
          ))}
    </div>
    </>




    </div>
  )
}

export default ProductsAdmin