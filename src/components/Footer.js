import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
      <div className='footer-container-left'>
        <div className='left'>
          <img src='assets/logo 2.svg' alt='logo2'></img>
          <p>Shop online, save time, and enjoy convenient <br/>
            delivery same day fast reliable and fresh <br/>
            delivery for all your daily needs.</p>
        </div>
        <div className='icons'>
          <div className='linkedin'><FaLinkedin /></div>
          <div className='facebook'><FaSquareFacebook /></div>
          <div className='twitter'><IoLogoTwitter /></div>
        </div>
      </div>
      <div className='footer-container-right'>
        <div className='my-account'>
          <p>My Account</p>
          <ul>
            <li>My Account</li>
            <li>Order History</li>
            <li>Shoping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className='help'>
        <p>Helps</p>
        <ul>
            <li>Contact</li>
            <li>Faqs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='proxy'>
        <p>Proxy</p>
        <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className='categories2'>
        <p>Categories</p>
        <ul>
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid gray', margin: '20px auto', width: '98%' }}/>

      <div className='last'>
      <p>superquick &copy; 2024 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer