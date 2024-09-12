import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';
import arrow from '../../../public/arrow.png';stars.jpg
import stars from '../../../public/stars.jpg';
import face from '../../../public/akar-icons_facebook-fill.png';
import twit from '../../../public/Vector (1).png';
import li from '../../../public/Vector.png';

function ProductDetails({ addItemToCart }) {
  const { id } = useParams();
  const [theProduct, setTheProduct] = useState({});
  const [counter,setCounter]= useState(1)

  useEffect(() => {
    function CallApi() {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response)=>{return response.json()})
      .then((data)=>{ setTheProduct(data)})
    }
    CallApi();
  }, [id]);

  const subTotal = counter*theProduct.price

  function HandleOnClick() {
    addItemToCart(theProduct.image, theProduct.title, theProduct.price, counter, subTotal)
    console.log(subTotal)
  }

  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
      if(counter>0){
          setCounter(counter -1)
      }
  }

  return (
    <div id='ProductDetails'>
      <div id='titeleHeader'>
        <label id='ho'>Home</label>
        <img src={arrow}/>
        <label>shop</label>
        <img src={arrow}/>
        <label id='pLine'>|</label>
        <label id='black'>{theProduct.title}</label>
      </div>

      <div id='ProductDetails-content'>
        <img src={theProduct.image}/>
        <div id='aboutproduct'>
          <h2>{theProduct.title}</h2>
          <h4>RS. {theProduct.price}</h4>
          <div id='Review'>
            <img src={stars}/>
            <label>|</label>
            <p>5 Customer Review</p>
          </div>
          <p>{theProduct.description}</p>

          <label>Size</label>
          <div className='Specifications'>
            <div className='s' id='L'>L</div>
            <div className='s'>Xl</div>
            <div className='s'>XS</div>
          </div>
          <label>Color</label>
          <div className='Specifications'>
            <div className='c' id='blue-circle'></div>
            <div className='c' id='black-circle'></div>
            <div className='c' id='Beige-circle'></div>
          </div>

          <div id='Buttons'>
            <div id='Q-div'>
              <button onClick={decrement}>-</button>
              <label>{counter}</label>
              <button onClick={increment}>+</button>
            </div>
            <Link to="/CartPage" id='btn-addToCart' onClick={HandleOnClick}>Add To Cart</Link>
          </div>

          <hr></hr>
          <div id='related'>
            <label>SKU : SS001</label>
            <label>Category : {theProduct.category}</label>
            <label>Tags : {theProduct.category},Home,Shop</label>
            <div>
              <label>Share :</label>
              <img src={face}/>
              <img src={twit}/>
              <img src={li}/>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div id='Description'>
        <h1>Description</h1>
        <p>{theProduct.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
