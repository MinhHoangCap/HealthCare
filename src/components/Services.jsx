import React from 'react'
import "../css/services.css"
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
// import ServicesItem from './ServicesItem'
import ServicesItem from './ServicesItem'
export const Services = () => {
  return (
    <div className="services">
        <ul className="services__list">
            
            <ServicesItem imgUrl="./image/search.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            <ServicesItem imgUrl="./image/famacy.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            <ServicesItem imgUrl="./image/consultation.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            <ServicesItem imgUrl="./image/details.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            <ServicesItem imgUrl="./image/emergency.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            <ServicesItem imgUrl="./image/tracking.png" heading='Search doctor' content="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            
        </ul>    
    </div>
  )
}

