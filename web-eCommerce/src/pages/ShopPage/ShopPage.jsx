import React from 'react'
import { useParams } from 'react-router-dom'
import './ShopPage.css'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import photo from "../../../public/img.jpg"
import Pagination from '../../components/Pagination/Pagination'
import pro from "../../../public/pro.jpg"
import PartofFooter from '../../components/PartofFooter/PartofFooter'

function ShopPage() {
    const { category } = useParams();
    /*const arrOfProducts=[
      { id:1 ,name :'pro1',photo : pro , price: '1000'},
      { id:2 ,name :'pro2',photo : pro , price: '2000'},
      { id:3 ,name :'pro3',photo : pro , price: '3000'},
      { id:4 ,name :'pro4',photo : pro , price: '4000'},
      { id:5 ,name :'pro5',photo : pro , price: '5000'},
      { id:1 ,name :'pro1',photo : pro , price: '1000'},
      { id:2 ,name :'pro2',photo : pro , price: '2000'}
    ]*/
  const [arrOfProducts,setArrOfProducts]=useState([])

  useEffect(()=>{
    function CallApi(){
      fetch(`https://fakestoreapi.com/products${category === 'products' ? '' : `/category/${category}`}`)
      .then((response)=>{return response.json()})
      .then((data)=>{ setArrOfProducts(data)})
    }
    CallApi();
  }, [category]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = arrOfProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
<>
    <div id='all-categ-products'>
      <img src={photo} id='image'/>
      {
  currentProducts.map((product) => {
    return (
      <Link to={`/ProductDetails/${product.id}`} key={product.id} className='single-product'>
        <img src={product.image} alt={product.title} />
          <div className='overlay'>
            <button className='add-to-cart'>More Details</button>
          </div>
        <div className='product-info'>
          <label className='title'>{product.title}</label>
          <label className='categ-name'>{product.category}</label>
          <label className='price'>Rp {product.price}</label>
        </div>
      </Link>
    );
  })
}

      
    </div>
    <Pagination 
    productsPerPage={productsPerPage} 
    totalProducts={arrOfProducts.length} 
    paginate={paginate} 
    currentPage={currentPage}
  />
  <PartofFooter></PartofFooter>
  </>
  )
}

export default ShopPage