import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

import {Autoplay, Navigation } from "swiper";
function Carousel() {
  return (
    <div className='carou'>
        <Swiper
        draggable={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
        loop={true}
        speed={2000}
        rewind={true}
        navigation={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper swipp"
      >
        <SwiperSlide>
        <div className='slider-card card_1'>
        <div className='slider-card-text'>
          <Fade className='fade' delay={500} top><h3 className='slider-card-h3'>NEW COLLECTION</h3></Fade>
          <Fade className='fade' delay={600} top><h2 className="slidar-card-h2">STREET</h2></Fade>
          <Fade className='fade' delay={800}><img src='https://demo2.wpopal.com/striz/wp-content/uploads/revslider/slide_home1/Wear.png' alt=""/></Fade>
        </div>
      <div className='slider-card-image'>
        <img className='slider-card-image-image' src='https://demo2.wpopal.com/striz/wp-content/uploads/revslider/slide_home1/slide-home1-2.png' alt=''/>
        <Zoom delay={700}><img className='slider-card-image-person' src='https://demo2.wpopal.com/striz/wp-content/uploads/revslider/slide_home1/slide-home1.png' alt=''/></Zoom>
      </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-card card_1'>
        <div className='slider-card-text'>
          <Fade className='fade' delay={500} top><h3 className='slider-card-h3'>STREET STYLE</h3></Fade>
          <Fade className='fade' delay={600} top><h2 className="slidar-card-h2">MUST</h2></Fade>
          <Fade className='fade' delay={800}><img src='https://demo2.wpopal.com/striz/wp-content/uploads/revslider/slide_home1/haves.png' alt=""/></Fade>
        </div>
      <div className='slider-card-image'>
        <img className='slider-card-image-image' src='https://demo2.wpopal.com/striz/wp-content/uploads/revslider/slide_home1/slide-home1-2.png' alt=''/>
        <Zoom delay={700}><img className='slider-card-image-person' src='https://demo2.wpopal.com/striz/wp-content/uploads/revslider/slide_home1/slide-home3.png' alt=''/></Zoom>
      </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel