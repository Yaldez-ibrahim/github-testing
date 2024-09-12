import React from 'react'
import './HomePage.css'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import photo from "../../../public/img.jpg"
import electronicsPhoto from "../../../public/electronics.jpg"
import jewlaryPhoto from "../../../public/jewlary.jpg"
import menPhoto from "../../../public/men.jpg"
import PartofFooter from '../../components/PartofFooter/PartofFooter'


function HomePage() {
  const arrOfPhotos=[electronicsPhoto,jewlaryPhoto,menPhoto]
  var counter=-1
  const arrOfObj=["electronics","jewlary","men"]
 /* const [arrOfObj,setArrOfObj]=useState([])
  useEffect(()=>{
    function CallApi(){
      fetch('https://fakestoreapi.com/products/categories')
      .then((response)=>{return response.json()})
      .then((data)=>{ setArrOfObj(data)})
    }
    CallApi()
  },[])*/
  return (
    <>
    <div id='home'>
        <img src={photo} id='image'/>
        <div id='Categories'>
            <h1>Categories</h1>
            <div id='threeCateg'>
                {arrOfObj.slice(0, 3).map((categ)=>{
                  counter=counter+1
                    return(
                        <Link to={`/ShopPage/${categ}`} className='singleCateg' key={categ}>
                            <img src={arrOfPhotos[counter]} className='categImage'/>
                            <label>{categ}</label>
                        </Link>
                    )
                  })}
            </div>
        </div>
    </div>
    <PartofFooter></PartofFooter>
    </>
  )
}

export default HomePage