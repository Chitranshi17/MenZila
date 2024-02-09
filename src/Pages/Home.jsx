import React, { useContext } from 'react'
import Carousal from '../Components/Carousal'
import Items from '../Components/Items'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import VideoComponent from '../Components/VideoComponent'
import ProductContext from '../Context/Products/ProductContext'

const Home = () => {
  const {cartItems} = useContext(ProductContext);

  console.log(cartItems)

  return (
    <div className="home">
      <Header/>
      <Carousal/>
      <Items/>
      <VideoComponent/>
      <Footer/>
    </div>
  )
}

export default Home
