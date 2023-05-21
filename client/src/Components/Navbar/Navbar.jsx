import React from 'react'
import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoIosArrowUp } from 'react-icons/io'
import { HiOutlineX } from 'react-icons/hi'
import { GiExitDoor } from 'react-icons/gi'
import { GiEntryDoor } from 'react-icons/gi'
import { useState } from 'react'
import { useProvider } from '../../Context/ProductContext'
import { useSelector } from 'react-redux';

function Navbar() {
    const { favs } = useProvider()
    const [navvisible, setNavvisible] = useState(null)
    const [icon, setIcon] = useState(false)
    const navigate = useNavigate()
    const basket_count = useSelector(state => state.basket.count) 
    let user = JSON.parse(localStorage.getItem("user"))
    const handleWindow = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const handleNav = () => {
        setIcon(true)
        setNavvisible("nav-active")
    }
    const handleNavX = () => {
        setIcon(false)
        setNavvisible(null)
    }
    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
        window.location.reload()
    }
    return (
        <>
            <div id='navbar'>
                <div className="navbar-brand">
                    <img className='navbar-brand-image' src='https://demo2.wpopal.com/striz/wp-content/uploads/2019/01/logo-new.svg' alt="logo" />
                </div>
                <div className="navbar-links">
                    <ul className='navbar-links-list'>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to='/products'>PRODUCT</NavLink></li>
                        <li><NavLink to='/onsale'>ON SALE</NavLink></li>
                        <li><NavLink to='/blog'>BLOG</NavLink></li>
                        <li><NavLink to='/contact'>CONTACT</NavLink></li>
                        <li><NavLink to='/about'>ABOUT</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-icons">
                    <span onClick={() => { navigate('/wishlist') }}><CiHeart /><sup>{user ? user.userWishList.length : 0}</sup></span>
                    <span onClick={() => { navigate('/cart') }}><BsCart3 /><sup>{user ? basket_count : 0}</sup></span>
                    {
                        user?
                        <span className='person'>
                        <BsPerson onClick={() => { user ? navigate("/profile") : navigate("/login") }} />
                        <div className='hover-profile'>
                            <img className='hover-profile-image' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="" onClick={()=>{navigate("/profile")}} />
                            <div className="hover-profile-username-email">
                                <h4 className='hover-useremail'>Username:{user.username}</h4>
                                <h4 className='hover-useremail'>Email:{user.email}</h4>
                            </div>
                            <div className="hover-profile-wishlist-card">
                                <h4 className='hover-wish-card' onClick={()=>{navigate("/wishlist")}}>Wishlist <span></span></h4>
                                <h4 className='hover-wish-card' onClick={()=>{navigate("/cart")}}>Cart <span></span></h4>
                            </div>
                        </div>
                    </span>:null
                    }
                    {
                        user ? <span onClick={logout}><GiExitDoor /></span> : <span onClick={() => { navigate('/login') }}><GiEntryDoor /></span>
                    }

                </div>
                <div className="navbar-bars">
                    {
                        icon ? <HiOutlineX onClick={handleNavX} /> : <HiOutlineBars3 onClick={handleNav} />
                    }
                </div>
                <IoIosArrowUp onClick={handleWindow} className='arrow' />
            </div>
            <div id="toggle-navbar" className={navvisible}>
                <div className="toggle-navbar-links">
                    <Link to='/'>HOME</Link>
                    <Link to='products'>PRODUCTS</Link>
                    <Link to='blog'>BLOG</Link>
                    <Link to='contact'>CONTACT</Link>
                    <Link to='about'>ABOUT</Link>
                </div>
                <div className='toggle-navbar-links'>
                    {
                        user?
                        <p onClick={logout} className='toggle-log'>LOGOUT</p>
                        :  
                        <p onClick={() => { navigate('/login') }} className='toggle-log'>LOGIN</p>
                        }
                </div>
            </div>

            <div className="toggle-account">
                <span><BsPerson onClick={() => { user ? navigate("/profile") : navigate("/login") }} /></span>
                <span onClick={() => { navigate('/wishlist') }}><CiHeart /><sup>{user ? user.userWishList.length : 0}</sup></span>
                <span onClick={() => { navigate('/cart') }}><BsCart3 /><sup>{user ? basket_count : 0}</sup></span>
            </div>
        </>

    )
}

export default Navbar