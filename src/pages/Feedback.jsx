import React from 'react'
// import Card from 'react-bootstrap/Card'
import fb from "../css/feedback.module.css"
export const Feedback = () => {
  return (
    <div>
        <div className={fb.feedback}>
                
                    
                        <img className={fb.feedback_img} src='./image/user_img.png' />
                        <div className={fb.user__infomation}>
                            <div>Edward Newgate</div>
                            <div>Founder Circle</div>

                        </div>
                    
                    
                        <div className={fb.feedback_text}>
                            "Our dedicated patient engagement app and 
                            web portal allow you to access information instantaneously (no tedeous form, long calls, 
                            or administrative hassle) and securely"
                        </div>
                    

             
        </div>
    </div>
  )
}
