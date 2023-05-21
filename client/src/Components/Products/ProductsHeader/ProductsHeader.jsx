import React from 'react'
import './ProductsHeader.css'
import { useNavigate } from 'react-router-dom'

function ProductsHeader() {
    const navigate = useNavigate()
  return (
    <div id='productsheader'>
         <h4 className='products-header-h4'>
            PRODUCTS
        </h4>
        <p className='products-header-p'><span onClick={()=>{navigate('/')}} className='nav-home'>Home</span> <span>{'>'}</span> <span>Products</span></p>
    </div>
  )
}

export default ProductsHeader