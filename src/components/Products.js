//import React from 'react'
import React, { useEffect, useState } from "react";
import Product from "./Product"
import "../styles/products.css"


const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8000/product/")
      const data = await res.json()
      setAllProducts(data)
    }
    useEffect(() => {
      fetchProducts()
  
    }, [])
  

  return (
    <>

    <div className = "products-container">
      
        
          {allProducts.map((allProduct => {
            return (
            <Product 
              id = {allProduct.id}
              key = {allProduct.id}
              product = {allProduct}
              />
            )}
          ))}
    </div>

    </>
  );
};

export default Products