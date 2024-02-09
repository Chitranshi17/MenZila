import React from "react";
import { FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import ManzilaLogo from "../assets/ManZila-Logo.png";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCardIcon from "@mui/icons-material/AddCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
      <div className="container-fluid navbar-fluid">
        <a className="navbar-brand" href="#">
          <img src={ManzilaLogo} alt="" />
        </a>
        <button
          className="mx-5 navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon m-3 fs-4"></span>
        </button>
        <div className="collapse navbar-collapse d-flex align-items-center justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 section ">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                target="_blank"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Help
              </a>
            </li>
          </ul>

          <ul className="cart-profile">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                target="_blank"
                to="/cart"
              >
                {<FaCartArrowDown />}
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
              >
                {<FaUserCircle />}

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
                    <div className="menzila-zone hover-div">
                      <span className="d-flex">
                        {<AddBoxIcon />} <a href="">Menzila Zone</a>
                      </span>
                    </div>
                    <div className="orders hover-div">
                      <span className="d-flex">
                        {<AddCardIcon />} <a href="">Orders</a>
                      </span>
                    </div>
                    <div className="wishlist hover-div">
                      <span className="d-flex">
                        {<FavoriteIcon />} <a href="">Wishlist</a>
                      </span>
                    </div>
                    <div className="rewards hover-div">
                      <span className="d-flex">
                        {<GradeIcon />} <a href="">Rewards</a>
                      </span>
                    </div>
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
          <div className="nav-form">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
