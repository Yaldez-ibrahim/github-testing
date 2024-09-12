import React from 'react'
import './Layout.css'
import { Outlet, Link } from "react-router-dom"
import logo from "../../../public/logo.jpg"
import cartIcon from "../../../public/cartIcon.png"
function Layout() {
    let products="products"
    return (
        <>
          <nav >
            <ul>
              <li>
                <Link className='pages' to="/HomePage">
                     <img id='logo' src={logo}/>
                </Link>
              </li>
              <li id='home-icon'>
                <Link className='pages' to="/HomePage">Home</Link>
              </li>
              <li id='shop-icon'>
              <Link to={`/ShopPage/${products}`} className='pages' key={products}>Shop</Link>
              </li>
              <li id='contact-icon'>
                <Link className='pages' to="/ContactPage">Contact</Link>
              </li>
              <li id='cart-icon'>
                <Link className='pages' to="/CartPage">
                    <img id='cartIcon' src={cartIcon}/>
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet />
          <footer id='footer'>
            <div id='footerContent'>
              <div>
                <div className='all-col' id='first-col'>
                  <h3>furniro.</h3>
                  <label className='header-of-col'>400 University Drive Suite 200 Coral Gables,
                  FL 33134 USA</label>
                </div>
                <div className='all-col' id='second-col'>
                  <label className='header-of-col' >Links</label>
                  <Link className='pages' to="/HomePage">Home</Link>
                  <Link to={`/ShopPage/${products}`} className='pages' key={products}>Shop</Link>
                  <Link className='pages' to="/ContactPage">Contact</Link>
                  <label>about</label>
                </div>
                <div className='all-col' id='third-col'>
                  <label className='header-of-col' >Help</label>
                  <label>Payment Options</label>
                  <label>Returns</label>
                  <label>Privacy Policies</label>
                </div>
                <div className='all-col' id='forth-col'>
                  <label className='header-of-col' >Newsletter</label>
                  <div>
                    <div className='underLine'>Enter Your Email Address</div>
                    <div className='underLine'>SUBSCRIBE</div>
                  </div>
                </div>
              </div>
              <hr/>
              <label>2023 furino. All rights reverved</label>
            </div>
          </footer>
        </>
      )
}

export default Layout