import React, { useState } from 'react';
import './CartPage.css';
import photo from '../../../public/img.jpg';
import PartofFooter from '../../components/PartofFooter/PartofFooter';
import delet from '../../../public/delete.png';

function CartPage({ cartItems, setCartItems }) {
  function handleDeleting(event) {
    const deletedID = Number(event.currentTarget.id);
    const newArrayAfterDelete = cartItems.filter((item) => item.id !== deletedID);
    setCartItems(newArrayAfterDelete); 
  }

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.itemSubtotal, 0).toFixed(2);
  };

  return (
    <>
      <div id='CartPage'>
        <img src={photo} alt='Cart' />
        <div id='CartPage-content'>
          <div id='cart-items'>
            <div id='header-bar'>
              <label>Product</label>
              <label>Price</label>
              <label>Quantity</label>
              <label>Subtotal</label>
            </div>
            <div id='items-list'>
              {cartItems.map((item) => (
                <div className='single-cart-item' key={item.id}>
                  <img className='item-img' src={item.itemPhoto} alt={item.itemName} />
                  <label>{item.itemName}</label>
                  <label>Rs. {item.itemPrice}</label>
                  <div>{item.itemQuantity}</div>
                  <label className='subtotal-price'>Rs. {item.itemSubtotal}</label>
                  <img className='delete' src={delet} id={item.id} onClick={handleDeleting} />
                </div>
              ))}
            </div>
          </div>
          <div id='cart-totals'>
            <h1>Cart Totals</h1>
            <div id='total-sub-prices'>
              <div className='pri'>
                <label>Subtotal</label>
                <label id='st'>Rs. {calculateTotal()}</label>
              </div>
              <div className='pri'>
                <label>Total</label>
                <label id='t'>Rs. {calculateTotal()}</label>
              </div>
            </div>
            <button>Check Out</button>
          </div>
        </div>
      </div>
      <PartofFooter />
    </>
  );
}

export default CartPage;




/*const [arrOfcartItems , setArrOfcartItems] =useState([
    {
      id:1,
      itemPhoto : pro ,
      itemName : "product1",
      itemPrice : "12345",
      itemQuantity :"1",
      itemSubtotal : "12345"
    },
    {
      id:2,
      itemPhoto : pro ,
      itemName : "product2",
      itemPrice : "67890",
      itemQuantity :"2",
      itemSubtotal : "126000"
    }
  ])*/