import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import regGif from "../assets/reg.gif";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="signupContainer">
        <div className="signupform">
          <div className="signForm">
            {/* <div className="topSignup">
              <img src={regGif} alt="" />
            </div> */}
            <div className="bottomSignForm">
              <section className="formSignin">
                <div className="signUp-Form">
                  <form action="">
                    <h2 className="fw-bold">Register</h2>
                    <div className="inputbox">
                    <i class="fa-solid fa-user"></i>
                      <input type="Name" required placeholder="Enter Name Here"/>
                      {/* <label htmlFor="">Name</label> */}
                    </div>
                    <div className="inputbox">
                    <i class="fa-solid fa-envelope"></i>
                      <input type="email" required placeholder="Enter Email Here"/>
                      {/* <label htmlFor="">Email</label> */}
                    </div>
                    <div className="inputbox">
                      <i class="fa-solid fa-lock"></i>
                      <input type="password" required placeholder="Enter Password Here"/>
                      {/* <label htmlFor="">Password</label> */}
                    </div>
                    <div className="inputbox">
                      <i class="fa-solid fa-lock"></i>
                      <input type="password" required placeholder="Enter Confirm Password"/>
                      {/* <label htmlFor="">Confirm Password</label> */}
                    </div>
                    <button className="loginBtn">Register</button>
                    <p>
                      Don't have a account
                      <Link to="/Log-in">
                        {" "}
                        <a href="">Login</a>
                      </Link>
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
