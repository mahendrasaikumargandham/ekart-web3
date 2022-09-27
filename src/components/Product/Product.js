import React from 'react'
import "./Product.css";
function Product({ id, name, image, price }) {
  return (
    <div className='product'>
        <h3>{name}</h3>
        <img src = {image} alt = "" />
        <h3>₹{price}</h3>
        <button>View Details</button>
    </div>
  )
}

export default Product