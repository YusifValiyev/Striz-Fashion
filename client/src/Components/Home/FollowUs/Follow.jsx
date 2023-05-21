import React from 'react'
import './Follow.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Video from '../Video/Video';
function Follow() {
  return (
    <div id='follow'>
        <div className="follow-header">
        <h2 className='follow-header-head'>FOLLOW US</h2>
        <p className='follow-header-p'>@STRIZ_INSTAGRAM</p>
        </div>
        <div className="follow-slider">
        <Swiper className='mySwiper2' watchOverflow={true} loop={true} watchSlidesProgress={true} slidesPerView={6}
          breakpoints={{
            280: {
              width: 280,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
            2000: {
              width: 2000,
              slidesPerView: 6,
            },
            
          }}>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
            <SwiperSlide className='swip'></SwiperSlide>
         </Swiper>
        </div>
        <Video />
    </div>
  )
}

export default Follow