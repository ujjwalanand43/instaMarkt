import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperCuisine.module.css";
import Styles from './SwiperCuisine.module.css'
import Cuisine1 from  '../../assets/Images/cuisine-1.jpg';
import Cuisine2 from  '../../assets/Images/cuisine-2.jpg';
import Cuisine3 from  '../../assets/Images/cuisine-3.jpg';
import Cuisine4 from  '../../assets/Images/cuisine-4.jpg';
import Cuisine5 from  '../../assets/Images/cuisine-5.jpg';
import Cuisine6 from  '../../assets/Images/cuisine-6.jpg';
import Cuisine7 from  '../../assets/Images/cuisine-7.jpg';
import Cuisine8 from  '../../assets/Images/cuisine-8.jpg';
import { Pagination } from "swiper";
const SwiperCuisine = () => {
  return (
    <div className={Styles.swiperjs}>
    <Swiper
    slidesPerView={6}
    spaceBetween={100}
    className="mySwiper"
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      400:{
        slidesPerView:2,
      },
      639: {
        slidesPerView: 3,
      },
      865:{
        slidesPerView:4
      },
      1000:{
        slidesPerView:5
      },
      1500:{
        slidesPerView:6
      },
      1700:{
        slidesPerView:7
      }
    }}
  >
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine1} alt="" />
            <span><a href="">Italian</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine2} alt="" />
            <span><a href="">Thai</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine3} alt="" />
            <span><a href="">Chinese</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine4} alt="" />
            <span><a href="">Mexican</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine5} alt="" />
            <span><a href="">Indian</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine6} alt="" />
            <span><a href="">Indian</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img src={Cuisine7} alt="" />
            <span><a href="">Japanese</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img className='content-image'  src={Cuisine8} alt="" />
            <span><a href="">American</a></span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.content}>
            <img className='content-image'  src={Cuisine8} alt="" />
            <span><a href="">American</a></span>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SwiperCuisine