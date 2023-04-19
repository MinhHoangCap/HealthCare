import React from 'react'
import "../css/leading.css"
import {MoveIn,MoveOut, Animator, batch,Fade} from 'react-scroll-motion'
export const LeadingProvider = () => {
  return (
    <Animator animation={batch(Fade(),MoveIn(-200,0),MoveOut(-200,0))}>
      <div className='LeadingProvider'>
          <div className="leading__img">
            <img src="./image/leading-healthcare.png" alt="Leading image" />

          </div>
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
    </Animator>
  )
}
