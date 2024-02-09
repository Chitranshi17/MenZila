import React, { useContext } from "react";
import { FaUserCircle, FaCartArrowDown, FaSearchPlus } from "react-icons/fa";
import ManzilaLogo from "../assets/ManZila-Logo.png";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCardIcon from "@mui/icons-material/AddCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import AddBoxIcon from "@mui/icons-material/AddBox";
import googleImg from "../assets/googleAppStore.png";
import appleImg from "../assets/appleAppStore.png";
import Logo from "../assets/Logo-Menzila.png";
import ProductContext from "../Context/Products/ProductContext";

const Navbar1 = () => {

  const {cartItems} = useContext(ProductContext);

  return (
    <nav class="navbar nav navbar-expand-lg ">
      <div class="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          class="navbar-toggler mx-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon m-3 fs-4"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 section ">
            <li className="nav-item">
              <Link
                className="navItem nav-link  active text-primary"
                aria-current="page"
                to="/"
                target="_blank"
              >
                <h1 className="navItem">Home</h1>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active download
              text-primary"
                aria-current="page"
                href="#"
              >
                <h1 className="navItem">Download App</h1>

                <div className="downloadApp">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://play.google.com/store/apps?hl=en_IN&gl=US"
                      >
                        {" "}
                        <img src={googleImg} alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.apple.com/in/app-store/"
                      >
                        {" "}
                        <img src={appleImg} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-primary"
                aria-current="page"
                href="#"
              >
                <h1 className="navItem">Contact US</h1>
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link active text-primary"
                aria-current="page"
                href="#"
              >
                <h1 className="navItem">Help</h1>
              </a>
            </li> */}
          </ul>

          <ul className="cart-profile">
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                aria-current="page"
                // target="_blank"
                to="/cart"
              >
             <h2 className="navItemIcon d-flex align-items-center justify-content-center">   {<FaCartArrowDown />} <h6 className="fs-2 fw-bold">({cartItems.length})</h6></h2>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-primary" aria-current="page">
                <h2 className="navItemIcon">{<FaUserCircle />}</h2>

                {/* Profile Login */}
                <div className="profile-content">
                  <div className="profile-text">
                    <div className="sign-up">
                      <span className="d-flex justify-content-around">
                        <p>New Customer ?</p>
                        <Link to="/Log-in" className="login">
                          Log-in
                        </Link>
                      </span>
                    </div>
                    <div className="my-profile hover-div">
                      <span className="d-flex">
                        {<AccountCircleIcon />} <a href="">My Profile</a>
                      </span>
                    </div>
                    {/* <div className="menzila-zone hover-div">
                      <span className="d-flex">
                        {<AddBoxIcon />} <a href="">Menzila Zone</a>
                      </span>
                    </div> */}
                    {/* <div className="orders hover-div">
                      <span className="d-flex">
                        {<AddCardIcon />} <a href="">Orders</a>
                      </span>
                    </div> */}
                    <div className="wishlist hover-div">
                      <span className="d-flex">
                        {<FavoriteIcon />} <a href="">Wishlist</a>
                      </span>
                    </div>
                    {/* <div className="rewards hover-div">
                      <span className="d-flex">
                        {<GradeIcon />} <a href="">Rewards</a>
                      </span>
                    </div> */}
                    <div className="logout hover-div">
                      <span className="d-flex">
                        {<LogoutIcon />} <a href="">Log-Out</a>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <div className="nav-form d-flex align-items-center justify-content-center">
            <form className="d-flex align-items-center justify-content-center" role="search">
              <div className="box">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                {/* {<FaSearchPlus />} */}
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
