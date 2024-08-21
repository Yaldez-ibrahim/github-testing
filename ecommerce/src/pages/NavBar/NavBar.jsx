import React from 'react'
import './NavBar.css'
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import cart from "../../assets/images/icon-cart.svg"
import avatar from "../../assets/images/image-avatar.png"

function NavBar() {
    return (
        <>
          <nav>
            <img id="logo" src={logo}/>
            <ul>
              <li>
                <Link className='pages' to="/Collections">Collections</Link>
              </li>
              <li>
                <Link className='pages' to="/Men">Men</Link>
              </li>
              <li>
                <Link className='pages' to="/Women">Women</Link>
              </li>
              <li>
                <Link className='pages' to="/About">About</Link>
              </li>
              <li>
                <Link className='pages' to="/Contact">Contact</Link>
              </li>
            </ul>
            <div>
                <img id='cart' src={cart}/>
                <img id='avatar' src={avatar}/>
            </div>
          </nav>
    
          <Outlet />
        </>
      )
}

export default NavBar