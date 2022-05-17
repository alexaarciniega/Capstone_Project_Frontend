import React from 'react'
import { Link } from "react-router-dom";
import "../styles/homepage.css"
import { FaShoppingCart } from 'react-icons/fa';
import Logo from "../resources/Logo.png";
import Badge from '@mui/material/Badge';
//import Checkout from "../pages/Checkout"


const Navbar = () => {
  return (
    <div className = "navbar">
      <Link to = "/">
        <img 
            className = "navbar-logo"
            src= {Logo}
            alt="Company Logo"
        />
      </Link>
               
        
        
        <div className = "navbar-links-container">

            <Link to = "/about-us"className = "navbar-link" >
                <p>About us</p>
                </Link>
                <div className = "navbar-icon" >
                    <Link to = "/Checkout">
                        <Badge badgeContent={1} color="primary" >
                            <FaShoppingCart size={32}/>
                        </Badge>
                    </Link>
                </div>
            
        </div>
        
    </div>
    
  )
}

export default Navbar