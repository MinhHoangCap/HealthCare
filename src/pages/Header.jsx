import React from 'react'
import bannerImg from "../assets/banner.png"
import { Logo } from '../components/Logo'
import { TopNav } from '../components/TopNav'
import { HeaderText } from '../components/HeaderText'
import "../css/header.css"
export const Header = () => {
  return (
    <header id='header' className='header'>
        <div className="header__top">

          
            <Logo/>
            
            <TopNav/>
        </div>
        <div className="header__bottom">
            
            <HeaderText/>
            <div className="header__illustration">
                <img src={bannerImg} alt="Banner Image" className="illustration-img" />
            </div>

        </div>
    </header>
  )
}
