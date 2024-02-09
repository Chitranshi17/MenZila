import React from 'react'
import { FaInstagram , FaFacebookF , FaPinterestP, FaWhatsapp , FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
   <>
   <div className="footer d-flex align-items-center justify-content-center ">
    <div className="top-footer">
      <div className="left-top-footer d-flex align-items-center justifu-content-around">
       <div className="footer-content">
     <Link to="/about">
     <h5>About</h5>
     </Link>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Carrer</li>
          <li>Menzila Stories</li>
          <li>Press</li>
          <li>Menzila Wholesale</li>
        </ul>
       </div>
       <div className="footer-content">
        <h5>Help</h5>
        <ul>
          <li>Payments</li>
          <li>Shiping</li>
          <li>Cancellation & Return</li>
          <li>FAQ</li>
          <li>Report Infrigement</li>
        </ul>
       </div>
       <div className="footer-content">
        <h5>Consumer Policy</h5>
        <ul>
          <li>Cancellation & Return</li>
          <li>Security</li>
          <li>Terms Of Use</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>EPR compliance</li>
        </ul>
       </div>
       <div className="footer-content">
        <h5>social</h5>
        <ul>
          <li><a href="">{<FaFacebookF/>}</a></li>
          <li><a href="">{<FaPinterestP/>}</a></li>
          <li><a href="">{<FaInstagram/>}</a></li>
          <li><a href="">{<FaWhatsapp/>}</a></li>
          <li><a href="">{<FaTwitter/>}</a></li>
        </ul>
       </div>
      </div>
      <div className="right-top-footer">
        <div className="mail">
          <h6><span className='text-danger fw-bold'>MenZila</span> Internet Private Limited,
          Building Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          <h6>Indore, 042809</h6>
          <h6>Madhya Pradesh, India</h6></h6>
        </div>
        <div className="registered">
        <h6><span className='text-danger fw-bold'>MenZila</span> Internet Private Limited,
          Building Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          <h6>Indore, 042809</h6>
          <h6>Madhya Pradesh, India</h6>
          <h6>CIN : UF9049235023928758</h6>
          <h6>Telephone : 094-24782623</h6></h6>
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <div className="top-bottomFooter">
        <ul>
          <li><a href="">Become a Seller</a></li>
          <li><a href="">Advertise</a></li>
          <li><a href="">Gift Cards</a></li>
          <li><a href="">Help Center</a></li>
        </ul>
      </div>
      <div className="bottom-bottomFooter bg-body-tertiary">
        <div className="copy-right">
          <h3>&copy; 2007-2023 Menzila.com</h3>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Footer
