import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react"
import Header from "./header"
import gsap from "gsap"
import "./layout.css"

import Hero from "./Hero"
import About from "./About"
import Spaces from "./Spaces"
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
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".main-container",
			pin: true,
			snap: "labels",
			scrub: true,
			end: "+=600%",
		}
	});

	
	mm.add(" (min-width: 721px)", () => {
		tl.to(".section-double", { xPercent: -40 })
		tl.to(".section-rest", { yPercent: -100 })
	})

	//mobile scroll-trigger animation
	mm.add(" (max-width: 720px)", () => {
		//tl.to(".about", { yPercent: -20 })
		//tl.to(".section-rest", { yPercent: -100 })
	})

	


  });

  return (
    <div className="main-wrapper">
		<nav className="nav">
			<p>nav</p>
			<p>nav</p>
			<p>nav</p>
		</nav>
		<div className="main-container">
			<section className="section-double">
				<section className="inner-section hero ">
					<Hero />
				</section>
				<section className="about-section about">
					<div className="loc-scroll hidden-lg card">
						<LocalScroller direction={"33.3%"} uniqueId="second" className="scrolltray" timescalespeed={9} />
					</div>
					<About />
				</section>
				
			</section>
			<section className="section-rest card">
				<div className="section card">
					<Spaces />
				</div>
				<div className="section card">
					<Spaces />
				</div>
			</section>
		</div>
    </div>
  )
}

export default Layout
