import React from 'react'
import slider1 from "../assets/M4.png"
import slider2 from "../assets/M2.png"
import slider3 from "../assets/M3.png"
import slider4 from "../assets/M1.png"
// import slider5 from "../assets/slider-5.webp"
// import slider6 from "../assets/slider-6.webp"



const Carousel = () => {

  return (
    <>
    <div className="heroCarousel">
      {/* <Slider {...settings} className='heroCarouselSec'>
        <div className="heroSlide">
          <img src={slider1} alt="" />
        </div>
        <div className="heroSlide">
          <img src={slider2} alt="" />
        </div>
        <div className="heroSlide">
        <img src={slider3} alt="" />
        </div>
        <div className="heroSlide">
        <img src={slider4} alt="" />
        </div>
        <div className="heroSlide">
        <img src={slider5} alt="" />
        </div>
        <div className="heroSlide">
        <img src={slider6} alt="" />
        </div>
      </Slider> */}


<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button> */}
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider1} class="d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src={slider5} class="d-block w-100" alt="..."/>
    </div> */}
    {/* <div class="carousel-item">
      <img src={slider6} class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
  )
}

export default Carousel;
