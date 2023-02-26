import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


export default function About() {

  return (
    <div className='about-wrapper'>
      <div className='about-content'>
        <div className='about-inner-container'>
          <div className='about-write-up'>
            <p className='about-title'>About Us</p>
            <p className='about-text'>CAVIC is a creative hub that provides artists with access to facilities to enable them pick up new skills, make them more visible and help them generate wealth in the creative ecosystem of Africa, whether they are visual artists, photographers, performers, designers, musicians, curators, consumers of creative works or suppliers of creative materials. It is strategically located in the heart of Abuja, the federal capital city of Nigeria.</p>
            <p className='partner-text'>Our Partners:</p>
            <div className='sponsors'>
              <img className='sponsor-img'  src={require('../images/partners/lwa.png').default}></img>
              <img className='sponsor-img2' src={require('../images/partners/bc.png').default}></img>
              <img className='sponsor-img'  src={require('../images/partners/afri.png').default}></img>
            </div>
          </div>
          <div className='about-attributes about-card'>
            <div className='test test1 about-card'>
              <img className='about-image' src={require('../images/reels/4.jpg').default}></img>
              <p>There are currently few services available to up and coming artists and few platforms that allow or provide them with start-up support or enable them to link up with other artists in similar situations. In a city such as Abuja where rents are exorbitant and many artists arrive with just their talents and their tools, finding the space, support and networks that enable them to express and grow that talent is oftentimes impossible, leading to a stunting of creative expression. </p>
            </div>
            <div className='test test2 about-card'>
              <img className='about-image' src={require('../images/reels/2.jpg').default}></img>
              <p>This creative space serves as a resource centre, a meeting place and melting pot for creative practitioners and organisations, CAVIC provides a supportive and creative space where innovative professionals from diverse artistic fields exploit their creative genius to foster social change. CAVIC also builds capacity and confidence across the creative workforce, ignited by creative education and skills provision.</p>
            </div>
            
            <div className='test test3 about-card'>test!!!!</div>
          </div>
        </div>
       </div>
    </div>
  )
}
