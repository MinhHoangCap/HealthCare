import React from 'react'
import "../css/downloads.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {MoveIn,MoveOut, Animator, batch,Fade} from 'react-scroll-motion'
export const Downloads = () => {
  return (
    <Animator animation={batch(Fade(),MoveIn(200,0),MoveOut(200,0))}>
      <div className='downloads'>
          <div className="downloads__text">
              <div className="downloads__heading heading">
              Download our mobile apps
              </div>
              <div className="downloads__content">
              Our dedicated patient engagement app and 
              web portal allow you to access information instantaneously (no tedeous form, long calls, 
              or administrative hassle) and securely
              </div>
              <button className="page-btn">Download <FontAwesomeIcon icon={faArrowDown}/></button>
              
              
          </div>
          <div className="downloads__img">
            <img src="./image/download-mobile.png"  alt="Leading image" />

          </div>
      </div>
    </Animator>
  )
}
