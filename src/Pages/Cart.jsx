import React, { useContext } from 'react'
import LeftCartI from '../Components/LeftCartI';
import RightCartI from '../Components/RightCartI';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import ProductContext from '../Context/Products/ProductContext';
import addtoCartGif from '../assets/cartGif.gif'
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import CartData from '../Components/CartData';

const Cart = () => { 
  
const {cartItems} = useContext(ProductContext);



if( cartItems.length === 0){
  return(
    <div className="container w-100  d-flex align-items-center justify-content-center text-primary" style={{width : "100%" , height : "80vh"}}>
      <div className="cartContent">
       <div className="cartContentGif">
       <img src={addtoCartGif} alt="" />
       </div>
        <div className="cartContentText">
        <h3>YOUR WISHLIST IS EMPTY</h3>
        <h6>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</h6>
       
       <Link to="/" className='w-100 d-flex align-items-center justify-content-center' style={{height : "50%", textDecoration : "none"}}> <button className='btn btn-outline-dark px-3 fs-2'>Continue Shopping</button></Link>

        </div>
      </div>
    </div>
  )
}
  return (
    <>
    <Header/>
    <div className="cart  container-fluid d-flex align-items-center justify-content-center">
      <div className="cart-container">
       <LeftCartI cartItems={cartItems}/>

       <RightCartI cartItems={cartItems}/>
       
      </div>
   </div>
   <Footer/>
    </>
  )
}

export default Cart;
