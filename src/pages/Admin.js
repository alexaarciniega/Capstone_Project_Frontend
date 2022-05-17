import React from 'react'
import ProductsAdmin from "../components/ProductsAdmin"
import Navbar from "../components/Navbar"

const Admin = (adminProduct, onEditAdmin) => {
  return (
    <div>
        <Navbar />
        <ProductsAdmin
          adminProductId ={ adminProduct._id }
          adminProduct ={ adminProduct }
          onEdit = {onEditAdmin} />
    </div>
  )
}

export default Admin