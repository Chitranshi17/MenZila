import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Login = () => {
  return (
    <>
      {/* <Box sx={{ width: "100%", display: "flex" }} className="container-login">
        <Box className="loginSec">
        <div className="left-login">
          <img src={login} alt="" />
        </div>
        <div className="right-login">
          <div className="form-container">
            <form action="" className="form w-75">
             <Box sx={{ width : "100%", height : "60%" }} className="d-flex align-items-center justify-content-around flex-column">
             <TextField
                 sx={{ borderRadius : "0" , display : "flex" , alignItems : "center" , justifyContent : "center"}}
                required
                id="outlined-required"
                label="Enter Email Here"
                type="email"
                fullWidth
              />
             <TextField
                 sx={{ borderRadius : "0" , color : "black"}}
                required
                id="outlined-required"
                fullWidth
                type="password"
                placeholder="Enter Your Password"
                label = " Enter Password Here"
              />
             </Box>
              <Button variant="contained" sx={{ padding : "1.3rem" , borderRadius : "3rem", fontSize : "1.2rem" , fontWeight : "700"}} fullWidth>Log-in</Button>
            </form>

            <Typography sx={{marginTop : "2rem" }}>
            <Link to="/sign-up">New To MenZila ? Create An Account</Link>
            </Typography>
          </div>
        </div>
        </Box>
      </Box> */}

<section className="formLogin">
  <div className="form-box">
    <div className="form-value">
      <form action="">
        <h2>Login</h2>
        <div className="inputbox">
          {/* <MdEmail/> */}
          <i class="fa-solid fa-lock"></i>
          <input type="email" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
          {/* <FaLock/> */}
          <i class="fa-solid fa-envelope"></i>
          <input type="password" required/>
          <label htmlFor="">Password</label>
        </div>
        <div className="forget d-flex align-items-center justify-content-center">
          <label htmlFor=""><input type="checkbox" />Remember me</label>
          {/* <a href="#">Forget Password</a> */}
        </div>
        <button className="loginBtn">Log in</button>
        <div className="registerlogin">
          <p>
            Don't have a account 
            <Link to="/sign-up">            <a href="">Register</a>
</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</section>

    </>
  );
};

export default Login;
