import React from 'react'
import Header from '../Header/Header'
import { useLocation } from "react-router-dom";
import Footer from '../Footer/Footer';

function ProductDetail() {
  const location = useLocation();
  // const { state } = this.props.location;
  return (
    <div className = 'productDetail'>
        <Header />
        <h2>{location.state.name}</h2>
        <Footer />
    </div>
  )
}

export default ProductDetail