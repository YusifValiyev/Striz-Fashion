import React from 'react'
import './Summer.css'
import disableScroll from 'disable-scroll';
import {VscPlayCircle} from 'react-icons/vsc'
import {HiOutlineTruck} from 'react-icons/hi'
import {GiReceiveMoney} from 'react-icons/gi'
import {MdOutlinePayments} from 'react-icons/md'
import {TbShoppingCartDiscount} from 'react-icons/tb'
import { useState } from 'react'
import Video from '../Video/Video'
function Summer() {
    const [videoo,setVideo] = useState(null)
    const handlePlay=()=>{
        setVideo("active")
        window.scrollTo({top:0})
        disableScroll.on()
    }
  return (
    <div id='summer'>
        <div className="summer-video">
            <div className="summer-video-texts">
                <h4 className='summer-video-texts-h4'>SUMMER EXCLUSIVE COLLECTION</h4>
                <h1 className='summer-video-texts-h1'>STREET TRENDING 2019</h1>
            </div>
            <div className="summer-video-play">
                <VscPlayCircle onClick={handlePlay}/>
                <h3 className='summer-video-play-h3'>watch video</h3>
            </div>
        </div>
        <div className="summer-icons-texts">
            <div className="summer-icons-texts-cards">
                <HiOutlineTruck/>
                <div className="summer-icons-texts-cards-texts">
                    <h3 className='summer-icons-texts-cards-texts-h3'>FREE DELIVERY</h3>
                    <p className='summer-icons-texts-cards-texts-p'>Free shipping worldwide</p>
                </div>
            </div>
            <div className="summer-icons-texts-cards">
                <GiReceiveMoney/>
                <div className="summer-icons-texts-cards-texts">
                    <h3 className='summer-icons-texts-cards-texts-h3'>MONEY BACK</h3>
                    <p className='summer-icons-texts-cards-texts-p'>Refund in 30 days</p>
                </div>
            </div>
            <div className="summer-icons-texts-cards">
                <MdOutlinePayments/>
                <div className="summer-icons-texts-cards-texts">
                    <h3 className='summer-icons-texts-cards-texts-h3'>SECURE PAYMENT</h3>
                    <p className='summer-icons-texts-cards-texts-p'>No transaction fees</p>
                </div>
            </div>
            <div className="summer-icons-texts-cards">
                <TbShoppingCartDiscount/>
                <div className="summer-icons-texts-cards-texts">
                    <h3 className='summer-icons-texts-cards-texts-h3'>MEMBER DISCOUNT</h3>
                    <p className='summer-icons-texts-cards-texts-p'>Free deals everyweek</p>
                </div>
            </div>
        </div>
        <Video className="vid" videoo={videoo} setVideo={setVideo}/>
    </div>
  )
}

export default Summer