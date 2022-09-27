import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./Accounts.css";

function Accounts() {
  return (
    <div className='accounts'>
        <Header />
        <h1>Your Account</h1>
        <div className='accounts-list'>
            <div className='accounts-orders'>
                <h2>Your Orders</h2>
                <p>Track, return, or buy things again</p>
            </div>
            <div className='accounts-orders'>
                <h2>Login & Security</h2>
                <p>Edit login, name and mobile number</p>
            </div>
            <div className='accounts-orders'>
                <h2>Your Addresses</h2>
                <p>Edit addresses for orders and gifts</p>
            </div>
            <div className='accounts-orders'>
                <h2>Payment Options</h2>
                <p>Edit or add payment methods</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Accounts