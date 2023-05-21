import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {TfiYoutube} from 'react-icons/tfi'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import {MdSupportAgent} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
function Footer() {
  return (
    <div id='footer'>
         <svg className='footer-contact-img' enableBackground="new 0 267.6 960 7.1" viewBox="0 267.6 960 7.1" xmlns="http://www.w3.org/2000/svg">
            <path className="elementor-shape-fill" d="m168.3 270.6c.3-.7.1-1 .4-1.7-.5 0-.8-.3-1.4-.1-.4 1-.2 1.7 1 1.8zm465.9 0c.3-.7 0-1 .4-1.7-.5 0-.8-.3-1.5-.1-.3 1-.2 1.7 1.1 1.8zm296.9 3c-.5-.1-1-.1-1.5-.2-3.1-.3-5 .2-5.7-1.7-3.3-.5-6.5.9-9.6.5-.7.2-1 .6-1.8.8-2.2-1.2-4.8-.3-7.3-.3-3.3 0-4.8-2.2-7.3-2.3-.3.2-.3.7-1 .6-2.5-.5-4.3.6-6.5.4-1.8-.1-2.8-1.3-4.5-1.8-3.3-.1-7.5-.1-10.5-.5-2-.3-4.3-1.4-5.6-1.5-1-.1-2.5 0-3.3.1-5.1.7-10.3 3-15.9 3.4-1 .1-2.2-.2-3.1-.1-2.5.1-4.7 1.3-7.5.9-.8.6-2 1.1-3.2 1-.5.3-.8.5-1.3.8h-13.3c-.2 0-.5-.1-.6-.1-.1.1-.2.1-.3.1h-16.2s0-.1-.1-.1c-1.8-.4-3.3 0-5.2-.4-1.3-.2-2.6-1.2-4-1.1-1 .1-1.7.9-2.5 1.1-1 .2-2.7-.2-4-.1-3.7.1-6.3.3-10-.4-.8-.7.6-.7.5-1.4-2.2-.6-5.7-.3-7.8 0-.8-.2-1.3-.5-2-.6-2.8-.3-7.3 1-9.8 1.1-2.3.1-4-.8-6.5-.6-2-3-6.8 1.8-10-.2-.1-.6.5-.8.7-1.3-3.6.4-6.7 1.7-10 1.3-2.8.6-5.2 1.8-7.7 2-1 .1-3 .4-4.2.3-1-.1-1.7-1-2.9-1.3-.7-.1-1.2.1-1.7 0-.7-.2-1-.7-1.8-.8s-2 .3-3 .4c-2.6.6-4.8 1.5-7.4 2h-2.4c-2.1-1-4.2-2.6-7-2.6-1.8 0-3.5.8-5.7.8-2.8-1.9-5.5-3.7-10.4-2.9-1 .1-1.7.8-2.5.9-2 .4-4.6.4-6.7.3-2.4-.1-4.5-.1-7.1-.3-.7.3-.9.8-1.8.8-1.2-.8-3.6-.5-3.5-2.2-2-.1-3.2-.9-5.7-.6-2.5 1.4-4.5 3.1-9.2 2.9-1.2 1.4-4.2 1.2-5.7.2-.7.3-.7 1-1.5 1.1-.8-.3-1.8-.4-2.7-.6 0 .7-1.1.7-1.8 1.1-.5.3-1.3.8-2 1.3h-5-.2-8.3c-2.5-1.5-5.2-1.5-8.7-1.6-.5.5-1 .9-1.7 1.3-3.6-.6-5.5-3.4-9.7-2.7-1.8 1.1-3.8 2.3-6.2 3h-16.1c-1.3-.4-2.7-.6-4.3-.5-.8 0-1.5.3-2 .5h-2.1c-2-.6-2.9-3-4.8-3.3-1.3-.2-1.7.8-3.1 1-3 .6-6.7.3-7.3-1-1.8.2-2.6-.4-4.2-.3-1.8 1-3.2 2.8-5.2 3.6h-5.7c-.7-.1-1.4-.1-2.1 0h-6.9c-3-.7-5.8-1.6-8.2-.6-.1.3-.2.5-.3.6h-7c-.5-.3-1.1-.5-2-.6-.3.3-.6.5-.9.6h-7.6c-.4-.3-.6-.6-.9-.9-2.5-.1-3.2-.8-5.9-.9-1.2.4-1.4 1.4-2.1 1.9h-2c-.5-.2-1-.5-1.5-.6-1.8-.7-3.2-.8-4-1.6-1.8.5-3.4 1.1-5.6 1.4-3.6.4-8-.1-11 .8h-2.2c-.5-.1-1-.1-1.5-.1-3.1-.3-5 .2-5.6-1.7-3.3-.5-6.5.9-9.6.5-.7.2-1 .6-1.9.8-2.2-1.2-4.9-.3-7.3-.3-3.3-.1-4.8-2.2-7.3-2.3-.3.2-.3.7-1 .6-2.5-.5-4.4.6-6.5.5-1.9-.2-2.8-1.3-4.5-1.9-3.3-.1-7.5-.1-10.5-.5-2-.3-4.4-1.4-5.6-1.5-1-.1-2.5 0-3.4.1-5.1.7-10.4 3-15.9 3.5-1 0-2.1-.2-3.1-.2-2.5.2-4.7 1.3-7.5.9-.9.5-2 1.1-3.1.9-.5.3-.8.6-1.3.8h-13.4c-.2-.1-.5-.1-.6-.2-.1.1-.1.1-.3.2h-16.1c0-.1 0-.1-.1-.2-1.8-.4-3.4 0-5.2-.3-1.3-.2-2.6-1.2-4-1.1-1 .1-1.6.9-2.5 1.1-1 .2-2.6-.2-4-.2-3.6.1-6.3.3-10-.4-.8-.6.6-.7.5-1.4-2.2-.6-5.7-.3-7.8 0-.8-.2-1.3-.6-2-.6-2.8-.3-7.3 1-9.8 1.1-2.3 0-4-.9-6.5-.6-2-3-6.9 1.9-10-.2-.1-.6.5-.8.6-1.3-3.6.4-6.7 1.7-10 1.3-2.9.6-5.1 1.8-7.7 2.1-1 .1-3 .4-4.2.3-.9 0-1.6-1-2.9-1.3-.6-.1-1.2.1-1.6 0-.7-.2-1.1-.7-1.9-.8s-2.1.3-2.9.5c-2.6.5-4.8 1.5-7.4 2h-2.4c-2.1-1-4.1-2.6-7.1-2.7-1.9 0-3.5.8-5.6.8-2.8-1.9-5.4-3.7-10.4-2.9-.9.1-1.6.8-2.5.9-1.9.4-4.6.4-6.7.3-2.4-.1-4.6-.1-7.1-.3-.7.3-.9.8-1.9.8-1.1-.8-3.6-.5-3.6-2.2-2.1-.1-3.2-.9-5.6-.6-2.4 1.5-4.6 3.1-9.2 3-1.1 1.3-4.2 1.2-5.6.1-.7.3-.6 1-1.4 1.1-.9-.3-1.9-.4-2.7-.6.1.7-1.1.7-1.9 1.1-.6.3-1.3.8-2.1 1.3h-5.1c-.1 0-.1 0-.2 0h-8.3c-2.4-1.6-5.2-1.5-8.6-1.6-.4.5-1 .9-1.6 1.3-3.6-.6-5.5-3.4-9.6-2.6-1.8 1.1-3.8 2.3-6.2 2.9h-16.4c-1.3-.4-2.7-.6-4.3-.5-.8.1-1.4.3-2.1.5h-2.1c-2-.6-2.9-3-4.8-3.3-1.3-.2-1.7.8-3.1 1.1-2.9.6-6.7.3-7.3-1.1-1.8.2-2.6-.4-4.2-.3-1.8 1-3.2 2.8-5.2 3.6h-5.7c-.7-.1-1.4-.1-2.1 0h-.1-6.5c-3-.7-5.8-1.6-8.2-.7-.1.3-.2.5-.3.7h-7c-.5-.3-1.2-.6-2-.7-.3.3-.6.5-.9.7h-7.7c-.3-.3-.7-.6-.8-1-2.5 0-3.2-.8-5.9-.9-1.2.4-1.4 1.4-2.1 1.9h-2c-.5-.2-1-.5-1.5-.6-1.8-.7-3.2-.8-4-1.6-1.8.5-3.4 1.2-5.6 1.4-3.6.4-8-.2-10.9.8h-1.6v.8-.1h960v-.9h-28.9z"></path>
            </svg>
        <div className="footer-lists">
            <div className="footer-lists-list">
                <div className="footer-list-categories">
                    <ul>
                        <li className='header-li'>CATEGORIES</li>
                        <li className="list">For Men</li>
                        <li className="list">For Woman</li>
                        <li className="list">Accessories</li>
                        <li className="list">Other</li>
                    </ul>
                </div>
                <div className="footer-list-categories">
                <ul>
                        <li className='header-li'>ACCOUNT</li>
                        <li className="list">Wishlist</li>
                        <li className="list">Compare</li>
                        <li className="list">Subscribe</li>
                        <li className="list">Log in</li>
                    </ul>
                </div>
                <div className="footer-list-categories">
                    <ul>
                        <li className='header-li'>QUICK LINKS</li>
                        <li className="list">Shipping & Returns</li>
                        <li className="list">Privacy Policy</li>
                        <li className="list">Terms & Conditions</li>
                        <li className="list">Vacancies</li>
                    </ul>
                </div>
                <div className="footer-list-categories">
                <ul>
                        <li className='header-li'>COMPANY</li>
                        <li className="list"><Link to="/about">About Us</Link></li>
                        <li className="list">Blog</li>
                        <li className="list">FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="footer-lists-phone">
                <div className="support">
                    <MdSupportAgent/>
                    <div className="support-texts">
                        <h4 className="agent-h2">WE OFFER 24/7 DEDICATED SUPPORT</h4>
                        <p className="agent-p">If you need support send us a message</p>
                    </div>
                </div>
                <div className="support">
                    <BiSupport/>
                    <div className="support-texts">
                    <p className="support-p">Got Question? Call Us 24/7</p>
                    <h2 className="support-phone">(012) 345 000 789</h2>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-contact">
            <div className="footer-contact-image">
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2019/01/logo-1.svg" alt="" />
            </div>
            <div className="footer-contact-location">
                <h2 className="footer-contact-location-h2">STORE LOCATION</h2>
                <p className="footer-contact-location-p">Box 565, Charlestown, Nevis, West Indies,Caribbean</p>
                <div className="footer-contact-location-icons">
                    <FaFacebookF className='footer-icons'/>
                    <AiOutlineTwitter className='footer-icons'/>
                    <TfiYoutube className='footer-icons'/>
                    <AiOutlineGooglePlus className='footer-icons'/>
                    <BsPinterest className='footer-icons'/>
                </div>
                <p className='footer-contact-location-p'>Email: <span className='span-email'>contact@example.com</span></p>
            </div>
            <div className="footer-input">
                <h2 className='footer-input-h2'>SIGN UP FOR NEWSLETTER</h2>
                <div className="footer-input-email">
                    <input className='footer-inp' type="text" placeholder='Enter email address...' />
                    <button className='footer-btn'>SUBSCRIBE <HiOutlineArrowSmRight/></button>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-credit">
            <p>Copyright © 2023 <span>Striz</span>. All Rights Reserved.</p>
            <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/payment.png" alt="" />
        </div>
    </div>
  )
}

export default Footer