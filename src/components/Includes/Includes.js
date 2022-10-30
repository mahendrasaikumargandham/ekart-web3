import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./Includes.css";

function Includes() {
  return (
    <div className='includes'>
        <Header />
        <h1>Your includes</h1>
        <div className='includes-list'>
            <div className='includes-orders'>
                <h2>Your Orders</h2>
                <p>Track, return, or buy things again</p>
            </div>
            <div className='includes-orders'>
                <h2>Login & Security</h2>
                <p>Edit login, name and mobile number</p>
            </div>
            <div className='includes-orders'>
                <h2>Your Addresses</h2>
                <p>Edit addresses for orders and gifts</p>
            </div>
            <div className='includes-orders'>
                <h2>Payment Options</h2>
                <p>Edit or add payment methods</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Includes
