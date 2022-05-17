import React, { useEffect, useState } from "react";
//import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Checkout from "./pages/Checkout"
import Admin from "./pages/Admin"
import CreateProduct from "./pages/CreateProduct"
import AboutUs from "./pages/AboutUs"
import Error from "./components/Error"

import { createProduct, updateProduct } from "./api/apiProduct";

  const App = () => {


    const [allProducts, setAllProducts] = useState([]);


  const handleOnSave = async (product) => {
    await createProduct(product);
    setAllProducts([...allProducts, product]);
  };
  
  //Admin products CRUD
  const [adminAllProducts, setAdminAllProducts] = useState([]);
  
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8000/product/")
      const data = await res.json()
      setAdminAllProducts(data)
    }
    useEffect(() => {
      fetchProducts()
  
    }, [])

    const handleOnEditAdmin = async (adminProductId, adminProduct) => {
      const res = await updateProduct(adminProductId, adminProduct);
      const copyOfProducts = adminAllProducts.map((item) =>
      adminProduct._id === res._id ? adminProduct : item
      );
      setAdminAllProducts(copyOfProducts);
    };
  //Admin products CRUD


    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage /> }/>
          <Route path="admin" element={<Admin 
              adminProducts = { adminAllProducts }
              onEdit = {handleOnEditAdmin}/>}/>
            
          
          
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin/create-product" element={<CreateProduct onSave = {handleOnSave}/>} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
          <Route path="admin/create-product/:adminProductId" element={<CreateProduct onEdit={handleOnEditAdmin}/>} />
        </Routes>
      </BrowserRouter>
    </div>
    )
  };
  
  export default App;
