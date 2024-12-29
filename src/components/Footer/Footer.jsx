import React from 'react'
import './Footer.css'
import youTube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={youTube_icon} alt="" />
        </div>

        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms Of Use</li>
          <li>Privacy</li>
          <li>Legal Notice</li>
          <li>Cookie Preferences</li>
          <li>Contract Us</li>
        </ul>

        <p className='copyright-text'>© 1997-2025 Netflix Clone Nahian, Inc</p>
    </div>
  )
}

export default Footer