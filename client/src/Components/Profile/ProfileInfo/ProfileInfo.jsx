import React from 'react'
import './ProfileInfo.css'
import { useNavigate } from 'react-router-dom'
function ProfileInfo() {
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("user"))
    return (
        <div id='user-profile'>
            <div className="profile">
                <div className="profile-left">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="" />
                    <h3 className='profile-username'>{user ? user.username : null}</h3>
                    <h5 className='profile-email'>{user ? user.email : null}</h5>
                </div>
                <div className="profile-right">
                    <div className='head'>
                        <h4 className='info'>Information</h4>
                        <hr />
                    </div>

                    <div className="emailname">
                    <div className="name">
                            <h4 className='emailname-h4'>Username</h4>
                            <p className='emailname-p'>{user ? user.username : null}</p>
                        </div>
                        <div className="email">
                            <h4 className='emailname-h4'>Email</h4>
                            <p className='emailname-p'>{user ? user.email : null}</p>
                        </div>
                    </div>

                    <div className='head'>
                        <h4 className='info'>Wishlist and Card</h4>
                        <hr />
                    </div>

                    <div className="emailname">
                        <div className="email">
                            <h4 className='emailname-h4'>WishList</h4>
                            <p className='emailname-p gowish' onClick={()=>{navigate('/wishlist')}} >Go to Wishlist</p>
                        </div>
                        <div className="name">
                            <h4 className='emailname-h4'>Basket</h4>
                            <p className='emailname-p gobasket' onClick={()=>{navigate('/cart')}} >Go to Basket</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo