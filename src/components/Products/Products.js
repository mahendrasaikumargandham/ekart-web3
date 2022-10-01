import React, { useState } from 'react'
import Product from '../Product/Product';
import "./Products.css";
import iphone from "./iphone14.png"

function Products() {
  return (
    <div className = "products">
        <div className='product-array'>
            <Product id = "11" name = "OnePlus 10" image = {iphone} price = "9999" />
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
        </div>
        <div className='product-array'>
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
        </div>
        <div className='product-array'>
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
            <Product id = "11" name = "Iphone 14 Pro" image = {iphone} price = "9999" />
        </div>
    </div>
  )
}

export default Products;