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
         spaceBetween={10}
         slidesPerView={3}
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
