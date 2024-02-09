import React from "react";
import CartItem from '../Components/CartItem';
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const LeftCartI = ({cartItems}) => {
  return (
    <div className="left-cart">
      <div className="shopping-cart">
        <h2 className="text-center w-100">Shopping Cart</h2>
      </div>
      <div className="Product-Cart">
      <div className="productData">
      <CartItem cartItems={cartItems}/>
      </div>

      
      </div>

      <div className="addMoreWishList">
        <div className="add">
        <span>
         <h3> Add More From WishList</h3>
        </span>
        <span>
         <Link to="/">
         <button className="btn btn-transaparent"><FaChevronRight/></button>
         </Link>
        </span>
        </div>
      </div>
    </div>
  );
};

export default LeftCartI;
