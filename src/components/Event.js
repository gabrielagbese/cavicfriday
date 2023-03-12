import React from 'react'
import EventContent from './event-content';
import objectPath from 'object-path'

export default function Event(props) {

    let currentEvent = props.event

    let titlePath = currentEvent+".title" 
	let eventtitle = objectPath.get(EventContent, titlePath)

	let imagePath = currentEvent+".image"
	let eventimage = objectPath.get(EventContent, imagePath)

	let writeupPath = currentEvent+".writeup"
	let eventwriteup = objectPath.get(EventContent, writeupPath)

    
  return (
    <div className='event-detail-wrapper'>
        <img src={eventimage}></img>
        <div className='event-detail-title'>{eventtitle}</div>
        <div>{eventwriteup}</div>
        
    </div>
    
  )
}
