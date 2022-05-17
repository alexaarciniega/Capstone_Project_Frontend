//import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import "../styles/forms.css"
import { getProductById } from "../api/apiProduct";

const Form = (onSave) => {
  const params = useParams();
  const { productId } = params;

  const newProduct = {
    name: "",
    description: "",
    imgUrl: "",
    price: "",
    updatedAt: new Date().toISOString(),
  };

  const [newProductState, setNewProductState] = useState(newProduct);
  useEffect(() => {
    const fetchingProductById = async () => {
      const res = await getProductById(productId);
      setNewProductState(res);
    };
    
    if (productId) {
      fetchingProductById();
    }
  }, [productId]);


  return (
    <div className="form-container">
      <form id="create-product-form" className="product-form">
          <h1 className = "form-title">Create product</h1>
        <div className="input-field">
          <label>Name: </label>
          <input className = "input-box"
            type="text"
            name="name"
            placeholder="Add a name"
          />
        </div>
        <div className="input-field">
          <label>Description: </label>
          <textarea className = "input-box"
            style={{ height: "200px" }}
            type="text"
            name="description"
            placeholder="Add a description to the product"
          />
        </div>
        <div className="input-field">
          <label>Price: </label>
          <input className = "input-box"
            type="number"
            name="price"
            placeholder="Add a price to the product"
          />
        </div>
        <div className="input-field">
          <label>Image: </label>
          <input className = "input-box"
            type="text"
            name="imgUrl"
            placeholder="Add URL of the image"
          />
        </div>

        <div className="buttons-container">
          <Link to="/admin">
            <button type="button">Cancel</button>
          </Link>

          <Link to="/admin">
          <button type="button"onClick={() => {
            if (newProductState?._id)
              onSave(newProductState._id, newProductState)
            else
              onSave(newProductState);
          }}> Save</button>
          </Link>

        </div>
      </form>
    </div>
  );
};
export default Form