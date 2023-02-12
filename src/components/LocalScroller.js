import React from 'react'
import gsap, { Power0 } from 'gsap'
import { useEffect } from 'react';
import { Linear } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IMAGES from '../images/Images';


export default function LocalScroller(props) {

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		let scroller = document.querySelectorAll(".scroller")
		let scrollmm = gsap.matchMedia();

		let scrollTl1 = gsap.timeline();
		let scrollTl2 = gsap.timeline();
		var rate = 50;
		let direction = props.direction;
		console.log(direction) 

		let master = gsap.timeline();
		scrollmm.add(" (max-width: 720px)", () => {
			master.to("#" + props.uniqueId, 60, { repeat: -1, x: direction, ease: Linear.easeNone, });
		})
		scrollmm.add(" (min-width: 721px)", () => {
			master.to("#" + props.uniqueId, 45, { repeat: -1, y: direction, ease: Linear.easeNone, });
		})


		var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });

		ScrollTrigger.create({
			start: 0,
			end: "+=100)%",
			onUpdate: self => {
				master.timeScale(6)
				tween.invalidate().restart();
			}
		})




	},);
	return (
		<div className='scroller-container'>
			<div className='scroller-inner-container' id={props.uniqueId} style={{ backgroundColor: "black" }}>
				<div className='scroller-reel reel1'>
					<div className='reel-node'>
						<div className='node-image-container'>1</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>2</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>3</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>4</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>5</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>6</div>
					</div>
				</div>
				<div className='scroller-reel reel2'>
					<div className='reel-node'>
						<div className='node-image-container'>1</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>2</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>3</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>4</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>5</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>6</div>
					</div>
				</div>
				<div className='scroller-reel reel0'>
					<div className='reel-node'>
						<div className='node-image-container'>1</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>2</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>3</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>4</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>5</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>6</div>
					</div>
				</div>
			</div>
		</div>
	)
}


// <div className='scroller scroller1 '>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events1} />
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events2}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events3}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events4}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events5}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events6}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events7}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events8}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events9}/>
// 					</div>
// 				</div>
// 				<div className='scroller scroller2 '>
// 				<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events1} />
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events2}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events3}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events4}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events5}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events6}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events7}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events8}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events9}/>
// 					</div>
// 				</div>
// 				<div className='scroller scroller0 '>
// 				<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events1} />
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events2}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events3}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events4}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events5}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events6}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events7}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events8}/>
// 					</div>
// 					<div className='scroll-image-container'>
// 						<img className='scroll-fit' src={IMAGES.events.events9}/>
// 					</div>
// 				</div>