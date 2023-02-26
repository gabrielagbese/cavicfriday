import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


export default function About() {

  return (
    <div className='about-wrapper'>
      <div className='about-content'>
        <div className='about-inner-container'>
          <div className='about-write-up'></div>
          <div className='about-attributes about-card'>
            <div className='test test1 about-card'>test!!!!</div>
            <div className='test test2 about-card'>test!!!!</div>
            <div className='test test3 about-card'>test!!!!</div>
          </div>
        </div>
       </div>
    </div>
  )
}
