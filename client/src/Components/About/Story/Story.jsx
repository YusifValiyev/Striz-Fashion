import React from 'react'
import './Story.css'
import {HiOutlineTruck} from 'react-icons/hi'
import {MdOutlinePayments} from 'react-icons/md'
import {MdSupportAgent} from 'react-icons/md'
function Story() {
  return (
    <div id='story'>
        <div className="story-header">
            <h3 className='story-header-h3'>WE ARE KNOWN FOR OUR ABILITIES TO FIND TOP MODELS FOR BOTH FINN AND INTERNATIONAL MARKETS.</h3>
            <p className="story-header-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="story-section">
            <div className='story-section-image1'>
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/img1.jpg" alt="" />
            </div>
            <div className='story-section-image2'>
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/img2.jpg" alt="" />
            </div>
            <div className="story-section-text1">
                <h3 className='story-section-text1-h3'>OUR STORY</h3>
                <p className='story-section-text1-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="story-section-text2">
                <div className="story-section-text2-delivery">
                    <HiOutlineTruck/>
                    <div className="delievery-text">
                        <h3 className="delievery-h3">FREE DELIVERY</h3>
                        <p className="delievery-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="story-section-text2-support">
                    <MdSupportAgent/>
                    <div className="delievery-text">
                    <h3 className="delievery-h3">FREE DELIVERY</h3>
                        <p className="delievery-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="story-section-text2-payment">
                    <MdOutlinePayments/>
                    <div className="delievery-text">
                    <h3 className="delievery-h3">FREE DELIVERY</h3>
                        <p className="delievery-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story