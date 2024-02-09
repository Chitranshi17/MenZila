import React from "react";
import CartData from "./CartData";
import { CiSaveDown2 } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const CartItem = ({cartItems}) => {
  return (
    <div className="cartItem my-2">
      <div class="container text-center cartItem">
        {
          cartItems.map(cart => <CartData key={cart.id} cart={cart}/>)
        }
      </div>
     
    </div>
  );
};

export default CartItem;
