import React from 'react'
import "../css/leading.css"
export const LeadingProvider = () => {
  return (
    <div className='LeadingProvider'>
        <img src="./image/leading-healthcare.png" className='leading__img' alt="Leading image" />
        <div className="leading__text">
            <div className="leading__heading heading">
                Leading healthcare providers
            </div>
            <div className="leading__content">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
            in the solutions we deliver
            </div>
            <div className="page-btn">Learn more</div>
        </div>
    </div>
  )
}
