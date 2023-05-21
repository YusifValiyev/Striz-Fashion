import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WishlistHeader.css'
function WishlistHeader() {
    const navigate = useNavigate()
    return (
        <div id="wishlist">
            <h4 className='wishlist-header-h4'>
                WISHLIST
            </h4>
            <p className='wishlist-header-p'><span onClick={() => { navigate('/') }} className='nav-home'>Home</span> <span>{'>'}</span> <span>Wishlist</span></p>
        </div>
    )
}

export default WishlistHeader