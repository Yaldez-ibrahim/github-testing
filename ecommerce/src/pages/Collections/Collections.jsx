import React from 'react'
import "./Collections.css"
import { useState } from 'react';
import image1 from '../../assets/images/image-product-1.jpg'
import image2 from '../../assets/images/image-product-2.jpg'
import image3 from '../../assets/images/image-product-3.jpg'
import image4 from '../../assets/images/image-product-4.jpg'
import cart from "../../assets/images/icon-cart.svg"
import plus from "../../assets/images/icon-plus.svg"
import minus from "../../assets/images/icon-minus.svg"

  
function Collections() {
  const [mainImage, setMainImage] = useState(image1); 
  const [counter,setCounter]= useState(0)

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter>0){
            setCounter(counter -1)
        }
    }

  const images = [
    { uniqId: '1', src: image1 },
    { uniqId: '2', src: image2 },
    { uniqId: '3', src: image3 },
    { uniqId: '4', src: image4 },
  ];
  
  return (
    <div id='Collections'>
        <div id='productImages'>
            <img src={mainImage} /> 
            <div>
                {
                    images.map((item)=>{
                        return(
                            <img
                         className='smallImg'
                         src={item.src}
                         key={item.uniqId}
                         onClick={() => setMainImage(item.src)}
                         />
                        )
                    })
                }
            </div>
        </div>
        <div id='productInfo'>
            <label>SNEAKER COMPANY</label>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div id='priceDive'>
              <label>$125.00</label>
              <div id='offer'>50%</div>
            </div>
            <del>$250.00</del>
            <div id='div-btn'>
                <div id='plus-min'>
                    <img src={plus} onClick={increment}/>
                    <label className="counter">{counter}</label>
                    <img src={minus} onClick={decrement}/>
                </div>
                <button><img src={cart}/>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Collections