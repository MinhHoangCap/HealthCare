import React from 'react'
import Card from 'react-bootstrap/Card'
import fb from "../css/feedback.module.css"
export const Feedback = () => {
  return (
    <div className={fb.feedback}>
        <Card>
                
                    
                        <Card.Img src='./image/user_img.png' />
                        <div className={fb.user__infomation}>
                            <Card.Title>Edward Newgate</Card.Title>
                            <Card.Subtitle>Founder Circle</Card.Subtitle>

                        </div>
                    
                    
                        <Card.Text>
                            "Our dedicated patient engagement app and 
                            web portal allow you to access information instantaneously (no tedeous form, long calls, 
                            or administrative hassle) and securely"
                        </Card.Text>
                    

             
        </Card>
    </div>
  )
}
