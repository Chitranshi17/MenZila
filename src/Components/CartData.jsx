import React, { useContext, useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ProductContext from '../Context/Products/ProductContext';
import { MdDelete } from "react-icons/md";


const CartData = ({cart}) => {

  
  const {dispatch} = useContext(ProductContext);

  const [countValue , setCountValue] = useState(0);

  const increaseValue = () => {
    setCountValue(countValue + 1);
    console.log(countValue)
  }
  const decreaseValue = () => {
    if(countValue>0){
      setCountValue(countValue - 1);
    }
    console.log(countValue)
  }

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
                <img src={cart.image} alt="" />
              </div>
            </div>
            <div className="rightCardData">
              <div className="remove">
                <button className="btn btn-danger text-light float-end rounded-0" onClick={()=>handleRemove(cart.id)}><MdDelete/></button>
              </div>
              <div className="rightCardText">
                <div className="cardDataName">
                  <h3>{cart.title}</h3>
                  <h6>{cart.category}</h6>
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
                        <button className="incre" onClick={()=>decreaseValue()}><FaMinus/></button>
                        <div className="number">
                          {countValue}
                        </div>
                        <button className="decre" onClick={()=>increaseValue()}><FaPlus/></button>
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
