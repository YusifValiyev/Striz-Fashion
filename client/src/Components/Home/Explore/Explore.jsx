import React from 'react'
import './Explore.css'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
function Explore() {
  return (
    <div id='explore'>
        <div className="explore-cards">
            <div className="explore-cards-card shopsave">
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/banner1_2.jpg" alt="" />
                <div className="shopsave-text">
                <h4>SHOP & SAVE</h4>
                    <h2>
                        <span>FLAT</span>
                        <span>40% OFF</span>
                        <span>EVERYTHING</span>
                    </h2>
                </div>
            </div>
            <div className="explore-cards-card newarrivals">
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/banner1_3.jpg" alt="" />
                <div className="shopsave-text">
                    <h4>NEW ARRIVALS</h4>
                    <h2>
                        <span>STREET</span>
                        <span>INSPIRATION</span>
                    </h2>
                </div>
            </div>
            <div className="smartstyle">
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2019/01/banner1_4.jpg" alt="" />
                    <div className="shopsave-text">
                    <h4>WEEKLY EDIT</h4>
                    <h2>
                        <span>SMART STYLE</span>
                    </h2>
                    <button><HiOutlineArrowSmRight/> EXPLORE NOW</button>
                    </div>
            </div>
            <div className="topbrands">
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/banner1_1.jpg" alt="" />
                    <div className="shopsave-text">
                    <h4>OUR OFFERS</h4>
                    <h2>
                        <span>TOP BRANDS</span>
                    </h2>
                    <button><HiOutlineArrowSmRight/> SHOP NOW</button>
                    </div>
            </div>
            <div className="freeshipping">
                <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/banner1.gif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Explore