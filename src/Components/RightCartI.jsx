import React from "react";

const RightCartI = ({cartItems}) => {

  const totalAmount = cartItems.reduce((p,c)=>{
    return p + c.price;
  }, 0)

  return (
    <div className="right-cart">
      <div className="cart-price">
        <div className="price-cart-heading">
          <h2 className="text-secondary">PRICE DETAILS</h2>
        </div>
        <div className="price-cart-text">
          <h3>
            Product ({cartItems.length}) <span className="float-end">${totalAmount}</span>
          </h3>
        </div>
        <div className="price-cart-total">
          <div className="cart-total">
            <h2>
              Total Amount <span className="float-end">{totalAmount}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="cartGif">
        
      </div>
    </div>
  );
};

export default RightCartI;
