//import React from 'react'
import React, { useEffect, useState } from "react";
//import { shoppingcart } from "../resources/data"
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart"

const ProductsCart = () => {
  const [allCartProducts, setAllCartProducts] = useState([]);
  
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8000/shopping-cart/")
      const data = await res.json()
      setAllCartProducts(data)
    }
    useEffect(() => {
      fetchProducts()
  
    }, [])


  return (
    <div className = "checkout-container">
      
        <div className = "cart-container">
            <div className = "cart-title"><h1>Checkout</h1></div>
            <div className = "checkout-form">


              <form className="checkout-form">
              <h1 className = "checkout-form-title">Personal information</h1>
              <div className = "checkout-input-container">
              <div className="checkout-input-field">
                  <label>Name: </label>
                  <input className = "checkout-name"
                    type="text"
                    name="name"
                    placeholder="Add a name"
                  />
              </div>

                <div className="checkout-input-field">
                  <label>Address: </label>
                  <input className = "checkout-address"
                    type="text"
                    name="address"
                    placeholder="Add an address"
                    />
                    </div>
                </div>
              </form>
            </div>

                



                <div className = "products-cart-container">
      
                
          {allCartProducts.map((allCartProduct => {
              return (
              <ProductCart 
                id = {allCartProduct.id}
                key = {allCartProduct.id}
                productCart = {allCartProduct}
                />
              )}
          ))}
    </div>



    
            <div className = "cart-amount"><p>Total amount: $0.00</p></div>
            
            <div className = "cart-button-container"><Link to = "/"><button className = "cart-pay-button" type = "button">Pay</button></Link></div>
         
</div>
</div>
  )
}

export default ProductsCart
