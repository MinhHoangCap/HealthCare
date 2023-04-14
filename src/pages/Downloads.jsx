import React from 'react'
import "../css/downloads.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
export const Downloads = () => {
  return (
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
        <img src="./image/download-mobile.png" className='downloads__img' alt="Leading image" />
    </div>
  )
}
