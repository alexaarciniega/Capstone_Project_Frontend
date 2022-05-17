import React from 'react'
import Navbar from "../components/Navbar"
import Promo from "../components/Promo"
import Products from "../components/Products"

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Promo />
        <Products />
    </div>
  )
}

export default HomePage