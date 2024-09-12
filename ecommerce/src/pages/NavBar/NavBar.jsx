import React from 'react'
import './NavBar.css'
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import cart from "../../assets/images/icon-cart.svg"
import avatar from "../../assets/images/image-avatar.png"

function NavBar() {
  const arrOfProducts =[
    {
      id:1,
      pName:"Product1"
    },{
      id:2,
      pName:"Product2"
    },{
      id:3,
      pName:"Product3"
    },{
      id:4,
      pName:"Product4"
    },{
      id:5,
      pName:"Product5"
    },{
      id:6,
      pName:"Product6"
    },{
      id:7,
      pName:"Product7"
    },{
      id:8,
      pName:"Product8"
    }
  ]
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
          {
            arrOfProducts.map((pro)=>{
              return (
                <link to={'/product/${pro.id}'}>
                <div>
                  <h1>{pro.pName}</h1>
                </div>
                </link>
                
              )
            })
          }
          <Outlet />
        </>
      )
}

export default NavBar