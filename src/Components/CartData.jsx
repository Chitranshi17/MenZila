import React, { useContext, useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ProductContext from '../Context/Products/ProductContext';
import { MdDelete } from "react-icons/md";


const CartData = ({cart}) => {

  const currentItem = cart
  console.log("currentItem" ,currentItem)
  const {dispatch} = useContext(ProductContext);

  const increaseQuantity = (currentItem) => {
    dispatch({
     type: "INCREASE_PRODUCT",
     payload: currentItem
    })
    console.log(increase)
   }
 
   const decreaseQuantity = (currentItem) => {
      dispatch({
       type: "DECREASE_PRODUCT",
       payload: currentItem
      })
      console.log(decrease)
      console.log(currentItem)
   }
  

  // const increaseValue = () => {
  //   setAmount(amount + 1);
  //   console.log(amount)
  // }
  // const decreaseValue = () => {
  //   if(amount>0){
  //     setAmount(amount - 1);
  //   }
  //   console.log(amount)
  // }

  const handleRemove = (id) => {
    dispatch({
      type : "REMOVE_FROM_CART",
      payload : id,
    })
  }

  return (
    <div class="text-center">
          {/* <div class="d-flex row-cols-4" >
            <div class="col cartdata">
              <div className="cartImg">
              <img src={items.image} alt="" />
              </div>
            </div>
            <div class="col cartdata d-flex align-items-center justify-content-center flex-column">
              <h6>{items.title}</h6>
              <p>{items.rating.rate}</p>
            </div>
            <div class="col cartdata">
              <h6>4</h6>
            </div>
            <div class="col cartdata">
              <h6>{items.price}</h6>
            </div>
          </div> */}
         
            <div className="cartData">
            <div className="leftCardData">
              <div className="cardDataImg">
                <img src={currentItem.image} alt="" />
              </div>
            </div>
            <div className="rightCardData">
              <div className="remove">
                <button className="btn btn-danger text-light float-end rounded-0" onClick={()=>handleRemove(currentItem.id)}><MdDelete/></button>
              </div>
              <div className="rightCardText">
                <div className="cardDataName">
                  <h3>{currentItem.title}</h3>
                  <h6>{currentItem.category}</h6>
                </div>
                <div className="cardSize">
                  <span>
                    <select name="" id="">
                      <option value="">Size</option>
                      <option value="">S</option>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XS</option>
                      <option value="">XL</option>
                      <option value="">XXL</option>
                    </select>

                    <div className="quantity">
                      <span>
                        <button className="incre"  onClick={() => decreaseQuantity(currentItem)}  ><FaMinus/></button>
                        <div className="number">
                          {/* {amount} */}
                          {currentItem.itemQuantity}
                        </div>
                        <button className="decre" onClick={() =>increaseQuantity(currentItem)} ><FaPlus/></button>
                      </span>
                    </div>
                  </span>
                </div>

                <div className="cardPrice">
                  <h4 className='d-flex align-items-center jusctify-content-center'><FaRupeeSign/>{cart.price}</h4>
                  <h5>30% Off</h5>
                </div>

                <div className="cardReturn">
                  <h6>7 Days Return Avaliable</h6>
                </div>
              </div>
            </div>
          </div>
          
    </div>
  )
}

export default CartData
