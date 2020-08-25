import React from 'react'
import { Swiper,SwiperSlide } from 'framework7-react';
import trackkingTrail from '../assets/trekking.png'
import bikeTrail from '../assets/biking-trail.png'
import cycleTrail from '../assets/cycling-trail.png'

function SwiperSlider() {
    return (
        <div className="swiperContainer">        
            <Swiper  pagination navigation scrollbar  init={true} params={{speed:500, slidesPerView: 1, spaceBetween: 20}}>
                <SwiperSlide>
                    <img src={trackkingTrail} className="swiperImage"  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bikeTrail} className="swiperImage" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cycleTrail} className="swiperImage" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperSlider
