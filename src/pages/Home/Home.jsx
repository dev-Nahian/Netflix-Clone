import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <div className='home'>
        <Navbar/>

        <div className="hero">
            <img src={hero_banner} alt="not found" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt="not found" className='caption-img' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero explicabo ex quibusdam, dolore tenetur fuga eius corrupti assumenda voluptatum consectetur!</p>

                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="not found" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="not found" />More Info</button>
                </div>
                
                <div className="title-cards">
                    <TitleCards className="title-cards" title={'Popular on Netflix'} />
                </div>
            </div>
        </div>

        <div className="more-cards">
            <TitleCards title={'Blockbuster Movies'} category={"top_rated"}/>
            <TitleCards title={'Only On Netflix'} category={"popular"}/>
            <TitleCards title={'Upcomeing'} category={"upcoming"}/>
            <TitleCards title={'Top Pics For You'} category={"now_playing"}/>
        </div>


        <Footer/>
    </div>
  )
}
