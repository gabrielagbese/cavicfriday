import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect, useRef } from "react"
import Header from "./header"
import gsap from "gsap"
import "./layout.css"

import Hero from "./Hero"
import About from "./About"
import Spaces from "./Spaces"
import Events from "./Events"
import Contact from "./Contact"
import LocalScroller from "./LocalScroller"



const Home = ({ children }) => {




	useEffect(() => {



		let mm = gsap.matchMedia();

		mm.add(" (min-width: 721px)", () => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".main-container",
					pin: true,
					snap: "labels",
					scrub: true,
					end: "+=1150%",
					// onLeave: function (self) {
					// 	self.scroll(self.start);
					// 	self.disable()
					// 	self.animation.progress(1)
					// },
				}
			});
			tl.to(".section-double", { xPercent: -40 })
			tl.to(".test2", { yPercent: -101 })
			tl.to(".test3", { yPercent: -202 })
			tl.to(".card1", { yPercent: -100 })
			tl.to(".card2", { yPercent: -200 })
			tl.to(".events-list", { yPercent: -300 })
			// tl.to(".card3", { yPercent: -322 })
			//tl.to(".section-rest", { yPercent: -90 })
		})

	});

	return (
		<div className="main-wrapper">

			<div className="main-container">
				<section className="section-double">
					<section className="inner-section hero ">
						<Hero />
					</section>
					<section className="about-section about">
						<div className="loc-scroll hidden-lg card">
							<LocalScroller direction={"33.3%"} uniqueId="second" imgSource="events" className="scrolltray" timescalespeed={9} />
						</div>
						<About />
					</section>

				</section>
				<section className="section-rest card">
					<div className="section card card1">
						{/* <Spaces /> */}
					</div>
					<div className="events-section card card2">
						<Events />
					</div>
					{/* <div className=" card3">
						<p>maker</p>
					</div> */}

				</section>

			</div>

		</div>
	)
}

export default Home
