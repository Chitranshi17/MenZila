import React from "react";

const ProductPage = () => {
  return (
    <>
      <div className="productPage">
        <div className="leftProductPage">
          <div className="productImage"></div>
        </div>
        <div className="rightProductPage">
          <div className="singleproductData">
            <div className="productName">
              <h2>Girls Denim Jacket's</h2>
              <h6>Shibori Dyed Regular Kurta with Trousers & Dupatta</h6>
              <div className="ratingContent">
                <p>
                  4.1 <i class="fa-solid fa-star"></i> | 4.6K Ratings
                </p>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae repellendus delectus quae eveniet nostrum, ullam eos. Quidem </p>
            </div>
            <div className="midProductData">
              <div className="offer-price">
                <span>
                  <h3>Rs. 999</h3>
                  <h4>(30% Off)</h4>
                </span>
                <p>inclusive of all taxes</p>
              </div>
              <div className="sizeSelect">
                <div className="sizeS">XS</div>
                <div className="sizeS">M</div>
                <div className="sizeS">L</div>
                <div className="sizeS">S</div>
                <div className="sizeS">XL</div>
                <div className="sizeS">XLL</div>
              </div>
              <div className="AddtoBag">
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="delivery">
              <h3>
                DELIVERY OPTIONS
                <i class="fa-solid fa-truck"></i>
              </h3>
              <div className="inputPin">
              <input type="text" placeholder="Enter Pin Code"/>
              <button>
                Check
              </button>
              </div>
              <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            </div>
            <div className="product-Data">
            <ul>
                <li>100% Original Products</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 7 days returns and exchanges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
