import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CartHeader.css'
function CartHeader() {
    const navigate = useNavigate()

  return (
    <div id='cartheader'>
        <h4 className='cart-header-h4'>
                CART
            </h4>
            <p className='cart-header-p'><span onClick={() => { navigate('/') }} className='nav-home'>Home</span> <span>{'>'}</span> <span>Cart</span></p>
    </div>
  )
}

export default CartHeader