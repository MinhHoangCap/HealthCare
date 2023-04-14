import React from 'react'
import { Services } from '../components/Services'
import "../css/services.css"
export const OurServices = () => {
  return (
    <div className='our-services'>
        <div className="text">
            <div className="text-heading heading  mg-center">
                Our Services
            </div>
            <div className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita voluptatum assumenda deserunt commodi quaerat necessitatibus in doloremque ipsam? Perspiciatis veritatis hic est, fugiat voluptas optio odio cupiditate alias temporibus?
            </div>
        </div>
        <Services/>
        <button className='page-btn'>Learn more</button>
    </div>
  )
}
