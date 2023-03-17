import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react"
import Header from "./header"
import gsap from "gsap"
import "./layout.css"

import Hero from "./Hero"
import About from "./About"
import Spaces from "./Spaces"
import Events from "./Events"
import Contact from "./Contact"
import LocalScroller from "./LocalScroller"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
	let mm = gsap.matchMedia();



	//scroll-trigger
	

	
	mm.add(" (min-width: 721px)", () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".main-container",
				pin: true,
				snap: "labels",
				scrub: true,
				end: "+=1150%",
			}
		});
		tl.to(".section-double", { xPercent: -40 })
		tl.to(".test2", { yPercent: -101 })
		tl.to(".test3", { yPercent: -202 })
		tl.to(".card1", { yPercent: -100 })
		tl.to(".card2", { yPercent: -200 })
		tl.to(".events-list", { yPercent: -275 })
	})

	//mobile scroll-trigger animation
	// mm.add(" (max-width: 720px)", () => {
	// 	tl.to(".contact", { yPercent: 0 })
		
	// })

	// let ctaButton = document.getElementById("nav-itm")
	// ctaButton.addEventListener('click', function(e) {
	// 	window.scrollTo(0, 700)
	// 	//alert("clicked")
	// })
   });

  return (
    <div className="main-wrapper">
		<nav className="nav">
			<img className="nav-logo" src={require('../images/cavlogo2.png').default}></img>
		</nav>
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
					<Spaces />
				</div>
				<div className="events-section card card2">
					<Events />
				</div>
				
			</section>
		</div>
    </div>
  )
}

export default Layout
