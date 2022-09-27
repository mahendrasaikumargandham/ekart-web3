import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='opt1'>
            <h2>Get to Know Us</h2>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Ekart Science</a>
            <a href='#'>Gift Ekart</a>
        </div>
        <div className='opt2'>
            <h2>Connect With Us</h2>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
        </div>
        <div className='opt3'>
            <h2>Make Money with Us</h2>
            <a href='#'>Sell on Ekart</a>
            <a href='#'>Sell under Ekart Accelerator</a>
            <a href='#'>Advertise your Products</a>
            <a href="#">Ekart Pay on Merchants</a>
        </div>
        <div className='opt4'>
            <h2>Let Us Help You</h2>
            <a href='#'>Your Account</a>
            <a href='#'>Returns Centre</a>
            <a href='#'>100% Purchase Protection</a>
            <a href="#">Ekart App Download</a>
            <a href='#'>Amazon Assistant Download</a>
            <a href="#">Help</a>
        </div>
    </div>
  )
}

export default Footer