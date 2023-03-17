import React from 'react'
import LocalScroller from './LocalScroller'

export default function Hero() {

  function ctaScroll(){
    // let ctaButton = document.getElementById("nav-itm")
	  // ctaButton.addEventListener('click', function(e) {
		window.scrollBy(0, 420)
		//alert("clicked")
	//})
  }

  
  return (
    <div className='hero-wrapper'>
        <div className='hero-content'>
          <div className='hero-inner-content'>
            {/* <p className='hero-hello'>Welcome to the</p> */}
            {/* <p className='hero-name'>Creative Arts & Visual Imagery Centre</p> */}
            <img className='hero-name-img' src={require('../images/herologo.png').default}></img>
            <p className='hero-writeup'>A creative hub that provides creatives with access to facilities to enable them pick up new skills, make them more visible and help them generate wealth in the creative ecosystem of Africa</p>
            <button className='cta' onClick={() => {ctaScroll()}}>Get in touch</button>
          </div>
        </div>
        <div className='hero-scrollers'>
            <LocalScroller direction={"-33.3%"} uniqueId="first" imgSource="spaces" className="scrolltray"/>
            <div className='hidden-xs'>
              <LocalScroller direction={"33.3%"} uniqueId="second" imgSource="events" className="scrolltray"/>
            </div>
        </div>
    </div>
  )
}
