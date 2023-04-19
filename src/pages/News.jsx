import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { New } from '../components/New'
import {Navigation, Pagination, Autoplay} from 'swiper'

export const News = () => {
  return (
    <div>
        <div className="news__heading heading mg-center">
            Check out our latest article
        </div>


        <Swiper 
        breakpoints={{
            992:{
                spaceBetween:10,
                slidesPerView:3
            },
            768:{
                spaceBetween: 10,
                slidesPerView: 2,

            },
            576:{
                spaceBetween: 0,
                slidesPerView:1
            }

        }}
         modules={[Navigation, Pagination, Autoplay]}
         navigation
         pagination={{clickable: true}}
         autoplay={{
           delay:2500,
         }}
         speed={3000}>
            <SwiperSlide>
                <New/>
            </SwiperSlide>
            <SwiperSlide>
                <New/>
            </SwiperSlide>
            <SwiperSlide>
                <New/>
            </SwiperSlide>
            <SwiperSlide>
                <New/>
            </SwiperSlide>
            <SwiperSlide>
                <New/>
            </SwiperSlide>
            <SwiperSlide>
                <New/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
