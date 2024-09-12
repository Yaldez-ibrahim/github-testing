import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import Layout from './pages/Layout/Layout';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(photo, name, price, quantity, subtotal) {
    const newItemObject = {
      id: cartItems.length + 1,
      itemPhoto: photo,
      itemName: name,
      itemPrice: price,
      itemQuantity: quantity,
      itemSubtotal: subtotal,
    };
    setCartItems([...cartItems, newItemObject]);
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='HomePage' element={<HomePage />} />
            <Route path='ShopPage' element={<ShopPage />} />
            <Route path='ContactPage' element={<ContactPage />} />
            <Route path='CartPage' element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path='ProductDetails' element={<ProductDetails addItemToCart={addItemToCart} />} />
            <Route path='ShopPage/:category' element={<ShopPage />} />
            <Route path='ProductDetails/:id' element={<ProductDetails addItemToCart={addItemToCart} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
