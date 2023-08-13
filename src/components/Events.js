import React from 'react';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import { useState } from 'react';
import gsap from 'gsap';

import Event from './Event';



export default function Events() {

	const [eventProp, setEventProp] = useState("Dialogues")

	let smm = gsap.matchMedia()
	let readMoreTimeline = gsap.timeline()

	function eventMore(a) {
		setEventProp(a)
		//
		smm.add(" (min-width: 721px)", () => {
			readMoreTimeline.to(".event-details", { x: "-60vw" })
		})
		//mobile
		smm.add("(max-width: 720px)", () => {
			// readMoreTimeline.set(".event-details", { x:"-100vw",y:"100vh"})
			readMoreTimeline.to(".event-details", { y: "-121vh" })
		})
	}
	function eventLess() {
		smm.add(" (min-width: 721px)", () => {
			readMoreTimeline.to(".event-details", { x: "0vw" })
		})
		//mobile
		smm.add("(max-width: 720px)", () => {
			readMoreTimeline.to(".event-details", { y: "100vh" })
		})
	}

	return (
		<div className='events-wrapper'>
			<div className='events-side'>
				<p className='events-name'> Events</p>
				<p className='event-text'>CAVIC pulls together resources within its network to organize exhibitions as well as host public information and arts appreciation events for the wider community in our spaces.</p>
				<p className='upcoming-title'> Upcoming Event:</p>
				<p className='upcoming-event'> Gallery Exhibition</p>
				<p className='upcoming-date'> 11th August 2023</p>
				<div className='calendar'>
					{/* <ReactEmbeddedGoogleCalendar publicUrl="https://calendar.google.com/calendar/embed?src=cavicnigeriainfo%40gmail.com&ctz=UTC" /> */}
				</div>
			</div>
			<div className='events-list'>
				<div className='event-item'>
					<div className='item-text'>
						<div className='item-name'>
							<p>Dialogues</p>
						</div>
						<div className='item-button' onClick={() => eventMore("dialogues")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/7.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("artparty")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Art Party</p>
						</div>
						<div className='item-button' onClick={() => eventMore("artparty")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/6.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("openmic")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Open Mic </p>
						</div>
						<div className='item-button' onClick={() => eventMore("openmic")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/5.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("seminar")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Seminars and Talks</p>
						</div>
						<div className='item-button' onClick={() => eventMore("seminar")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/4.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("dance")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Performing Arts</p>
						</div>
						<div className='item-button' onClick={() => eventMore("dance")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/13.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("holiday")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Holiday Programs</p>
						</div>
						<div className='item-button' onClick={() => eventMore("holiday")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/11.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("exhibitions")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Exhibitions</p>
						</div>
						<div className='item-button' onClick={() => eventMore("exhibitions")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/12.jpg').default}></img>
					</div>
				</div>
				<div className='event-item' onClick={() => eventMore("fashion")}>
					<div className='item-text'>
						<div className='item-name'>
							<p>Fashion</p>
						</div>
						<div className='item-button' onClick={() => eventMore("fashion")}>
							<p>Read More</p>
						</div>
					</div>
					<div className='item-image'>
						<img src={require('../images/reels/events/14.jpg').default}></img>
					</div>
				</div>
				<div className='invisible-event'></div>
			</div>
			<div className='event-details'>
				<button onClick={() => eventLess()} className="close-button">close</button>
				<Event event={eventProp} />
			</div>
		</div>
	)
}
