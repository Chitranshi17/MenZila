import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductContext from "../Context/Products/ProductContext";
import { toast } from "react-toastify";


const DeviceCard = ({ Device }) => {

  const {dispatch} = useContext(ProductContext);

  const handleAdd = (item) => {

    dispatch({
      type : "ADD_TO_CART1",
      payload : item
    })
    toast.success('🦄 Wow so easy!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
  
  }

  return (
    <div className="card">
      <div className="top-card">
        <img src={Device.image} alt="" />
      </div>
      <div className="bottom-card">
        <div className="addtocart">
          <button className="btn btn-dark text-light " onClick={()=>handleAdd(Device)}> 
          <HiOutlineShoppingCart/>

          </button>
        </div>
        <div className="card-details">
          <h4 style={{ textAlign: "center" }}>{Device.name}</h4>
          <h5>
            <span className="text-danger fw-bold mx-2">Price :</span> {Device.price}
          </h5>
          <div className="star d-flex align-items-center justify-content-center text-warning">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
