import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("menu")

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' />
      <ul className="navbar-menu">
        <Link onClick={()=>{setMenu('home')}} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu('menu')}} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#' onClick={()=>{setMenu('app')}} className={menu==="app"?"active":""}>App</a>
        <a href='#footer' onClick={()=>{setMenu('contact-us')}} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img className='navbar-search-icon' src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
