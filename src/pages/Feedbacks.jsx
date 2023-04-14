import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Navigation, Pagination, Autoplay} from 'swiper'
import { Feedback } from './Feedback'
import fbs from"../css/feedbacks.module.css"
export const Feedbacks = () => {
  return (
    <div className={fbs.feedbacks}>
        <div className="feedbacks__heading">What our customer are saying</div>
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{clickable: true}}
            autoplay={{
              delay:2500,
            }}
            speed={3000}
        >
            <SwiperSlide>
                <Feedback/>
            </SwiperSlide>
            <SwiperSlide>
                <Feedback/>
            </SwiperSlide>
            <SwiperSlide>
                <Feedback/>
            </SwiperSlide>
            <SwiperSlide>
                <Feedback/>
            </SwiperSlide>
            <SwiperSlide>
                <Feedback/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
