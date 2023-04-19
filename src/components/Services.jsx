import React from 'react'
import "../css/services.css"
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
// import ServicesItem from './ServicesItem'
import ServicesItem from './ServicesItem'
import { Animator, Fade, MoveIn, batch } from 'react-scroll-motion'
export const Services = () => {
  return (
    <div className="services">
        <ul className="services__list">
            
            <Animator animation={batch(Fade(),MoveIn(0, 200))}>
              <ServicesItem imgUrl="./image/search.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />

            </Animator>
            <Animator animation={batch(Fade(),MoveIn(0, 200))}>
            <ServicesItem imgUrl="./image/famacy.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />

            </Animator>
            
            <Animator animation={batch(Fade(),MoveIn(0, 200))}>
            <ServicesItem imgUrl="./image/consultation.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            </Animator>
            <Animator animation={batch(Fade(),MoveIn(0, 200))}>

            <ServicesItem imgUrl="./image/details.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            </Animator>
            <Animator animation={batch(Fade(),MoveIn(0, 200))}>

            <ServicesItem imgUrl="./image/emergency.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            </Animator>
            <Animator animation={batch(Fade(),MoveIn(0, 200))}>

            <ServicesItem imgUrl="./image/tracking.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            </Animator>
            
        </ul>    
    </div>
  )
}

