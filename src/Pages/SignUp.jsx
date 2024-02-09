import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import regGif from "../assets/reg.gif";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="signupContainer">
        <div className="signupform">
          {/* <div className="rightSignup">
            <img src={regGif} alt="" />
          </div> */}
          {/* <div className="leftSignup"> */}
          {/* <div className="formContainer">
              <form action="" className="formSign w-75">
                <Box
                  sx={{ width: "100%", height: "60%" }}
                  className="d-flex align-items-center justify-content-around flex-column"
                >
                  <TextField
                    sx={{
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    required
                    id="outlined-required"
                    label="UserName"
                    placeholder="Enter Name here"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    sx={{
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    required
                    id="outlined-required"
                    label="Email"
                    type="email"
                    placeholder="Enter Email Here"
                    fullWidth
                  />
                  <TextField
                    sx={{
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    required
                    id="outlined-required"
                    placeholder="Enter Password here"
                    label="Password"
                    defaultValue=""
                    type="email"
                    fullWidth
                  />
                  <TextField
                    sx={{ borderRadius: "0", color: "black" }}
                    required
                    id="outlined-required"
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Your Password"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{ padding: "1.8rem", borderRadius: "0", fontSize : "1rem", fontWeight : "700" }}
                  fullWidth
                >
                  Sign-UP
                </Button>
              </form>

              <Typography sx={{  fontSize : "1.7rem", fontWeight : "bold", color :"black" }}>
                <Link to="/log-in">Login Your Account</Link>
              </Typography>
            </div> */}
          {/* </div> */}
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
                      {/* <MdEmail/> */}
                      <i class="fa-solid fa-lock"></i>
                      <input type="email" required />
                      <label htmlFor="">Name</label>
                    </div>
                    <div className="inputbox">
                      {/* <MdEmail/> */}
                      <i class="fa-solid fa-lock"></i>
                      <input type="email" required />
                      <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                      {/* <MdEmail/> */}
                      <i class="fa-solid fa-lock"></i>
                      <input type="email" required />
                      <label htmlFor="">Password</label>
                    </div>
                    <div className="inputbox">
                      {/* <MdEmail/> */}
                      <i class="fa-solid fa-lock"></i>
                      <input type="email" required />
                      <label htmlFor="">Confirm Password</label>
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
