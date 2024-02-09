import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import Header from './Components/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Pages/Home'
// import About from './Pages/About'
// import Help from './Pages/Help'
import Cart from './Pages/Cart'
import About from './Pages/About';
import { ProductProvider } from './Context/Products/ProductContext';
import SignUp from './Pages/SignUp';
import Login from './Components/Login';
import CategoryProducts from './Pages/CategoryProducts';
import Header from './Components/Header';
import Navbar1 from './Components/Navbar1';
import MobileDevice from './Pages/MobileDevice';
import ProductPage from './Pages/ProductPage';
// import Contact from './Pages/Contact'

import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
   <Router>
  <ProductProvider>
  <Navbar1/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/about' element={<About/>} />
    <Route path="/log-in" element={<Login/>}/>
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path='/:category' element={<CategoryProducts/>}/>
    <Route path='/mobile&watchdevice' element={<MobileDevice/>}/>
    <Route path='/:catergory/mobile&watchdevice' element={<MobileDevice/>}/>
    <Route path="/productPage" element={<ProductPage/>}/>
   </Routes>
   <ToastContainer/>
  </ProductProvider>
   </Router>
  )
}

export default App
