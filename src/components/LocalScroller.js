import React from 'react'
import gsap, { Power0 } from 'gsap'
import { useEffect } from 'react';
import { Linear } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IMAGES from '../images/Images';


export default function LocalScroller(props) {

	let dynamicSource1
	let dynamicSource2
	let dynamicSource3
	let dynamicSource4
	let dynamicSource5
	let dynamicSource6

	if(props.imgSource == "events" ){
		dynamicSource1 = IMAGES.events.events1
		dynamicSource2 = IMAGES.events.events2
		dynamicSource3 = IMAGES.events.events3
		dynamicSource4 = IMAGES.events.events4
		dynamicSource5 = IMAGES.events.events5
		dynamicSource6 = IMAGES.events.events6
	}else if (props.imgSource == "spaces"){
		dynamicSource1 = IMAGES.spaces.spaces1
		dynamicSource2 = IMAGES.spaces.spaces2
		dynamicSource3 = IMAGES.spaces.spaces3
		dynamicSource4 = IMAGES.spaces.spaces4
		dynamicSource5 = IMAGES.spaces.spaces5
		dynamicSource6 = IMAGES.spaces.spaces6
	}

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
			master.to("#" + props.uniqueId, 60, { repeat: -1, y: direction, ease: Linear.easeNone, });
		})


		var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });

		ScrollTrigger.create({
			start: 0,
			end: "+=100)%",
			onUpdate: self => {
				master.timeScale(9)
				tween.invalidate().restart();
			}
		})




	},);
	return (
		<div className='scroller-container'>
			<div className='scroller-inner-container' id={props.uniqueId} style={{ backgroundColor: "#0c0c0c" }}>
				<div className='scroller-reel reel1'>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource1} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource5} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource3} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource4} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource2} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource6} />
						</div>
					</div>
				</div>
				<div className='scroller-reel reel2'>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource1} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource5} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource3} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource4} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource2} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource6} />
						</div>
					</div>
				</div>
				<div className='scroller-reel reel0'>
				<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource1} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource5} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource3} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource4} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource2} />
						</div>
					</div>
					<div className='reel-node'>
						<div className='node-image-container'>
							<img className='scroll-fit' src={dynamicSource6} />
						</div>
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