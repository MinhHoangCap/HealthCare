import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Navigation, Pagination, Autoplay} from 'swiper'
import { Feedback } from './Feedback'
import {MoveIn,MoveOut, Animator, batch,Fade} from 'react-scroll-motion'

import fbs from"../css/feedbacks.module.css"
// import { Fade, } from 'react-bootstrap'
export const Feedbacks = () => {
  return (
    
            // <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            //     <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
            // </Animator>
            <Animator animation={batch(Fade(),MoveIn(-200,0),MoveOut(-200,0))}>
                <div className={fbs.feedbacks}>
                    <div className={fbs.heading}>What our customer are saying</div>
                    <Swiper
                        breakpoints={{
                            768:{
                                spaceBetween: 10,
                                slidesPerView: 1,

                            }

                        }}
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

            </Animator> 
   
  )
}
