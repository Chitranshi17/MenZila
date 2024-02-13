import React, { useContext} from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductContext from "../Context/Products/ProductContext";
import { toast } from "react-toastify";


const Card = ({ product }) => {

  const {dispatch} = useContext(ProductContext);

  const handleAdd = (item) => {

    dispatch({
      type : "ADD_TO_CART",
      payload : item
    })
    // toast.success('🦄 Wow so easy!', {
    //   position: "bottom-right",
    //   autoClose: 1000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   transition: Bounce,
    //   });
  }



  return (
    <div className="card">
      <div className="top-card">
        <img src={product.image} alt="" />
      </div>
      <div className="bottom-card">
      <div className="addtocart">
          <button className="btn btn-dark text-light" onClick={()=>handleAdd(product)}> 
         <HiOutlineShoppingCart/>
          </button>
        </div>
        <div className="card-details">
          <h4 style={{ textAlign: "center" }}>{product.title}</h4>
          <h5>
            <span className="text-danger fw-bold">Price </span> :{" "}
            {product.price}
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

export default Card;
