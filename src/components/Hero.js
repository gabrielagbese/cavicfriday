import React from 'react'
import LocalScroller from './LocalScroller'

export default function Hero() {
  return (
    <div className='hero-wrapper'>
        <div className='hero-content'>
            content
        </div>
        <div className='hero-scrollers'>
            <LocalScroller direction={"-33.3%"} uniqueId="first" className="scrolltray"/>
            <div className='hidden-xs'>
              <LocalScroller direction={"33.3%"} uniqueId="second" className="scrolltray"/>
            </div>
        </div>
    </div>
  )
}
