import React from "react";
import Jewellery from "../assets/Jewellery.jpg";
import Electronics from "../assets/Electronics.jpg";
import Bags from "../assets/Bags&FootWear.jpeg";
import Home from "../assets/Home&Kitchen.jpg";
import Beauty from "../assets/Beauty&Health.jpg";
import Fashion from "../assets/Fashion2.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="header-nav">
      <ul className="header-nav-content">
        <li>
         <Link to="/mobile&watchdevice"
          className="d-flex align-items-center justify-content-center flex-column">
         <div className="header-box">
            <img src={Fashion} alt="" />
          </div>
          Mobile & Watch
         </Link>
        </li>
        {/* <li>
          <div className="header-box">
            <img src={Bags} alt="" />
          </div>
          <a href="">Bags & Footwear</a>
        </li> */}
        <li>
         <Link to="/women's clothing"
         className="d-flex align-items-center justify-content-center flex-column">
         <div className="header-box">
            <img src={Beauty} alt="" />
          </div>
          Women
         </Link>
        </li>
        <li>
         <Link to="/men's clothing"
         className="d-flex align-items-center justify-content-center flex-column">
         <div className="header-box">
            <img src={Home} alt="" />
          </div>
       Men
         </Link>
        </li>
        <li>
          <Link
            to="/electronics"
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <div className="header-box">
              <img src={Electronics} alt="" />
            </div>

          Gadgets
          </Link>
        </li>
        <li>
          <Link to="/jewelery"
           className="d-flex align-items-center justify-content-center flex-column">
          <div className="header-box">
            <img src={Jewellery} alt="" />
          </div>
         Jewellery
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
