import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import "./Product.css";

function Product({ id, name, image, price }) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleTransfer = () => {
    navigate('/details',
      {state: {
        id:`${id}`, 
        name:`${name}`
      }
    });
  }
  return (
    <div className='product'>
        <h3>{name}</h3>
        <img src = {image} alt = "" />
        <h3>₹{price}</h3>
        <button onClick={() => handleTransfer()}>View Details</button>
    </div>
  )
}

export default Product