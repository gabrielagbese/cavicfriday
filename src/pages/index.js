import * as React from "react"
import { useRef, useEffect } from "react"
import AppRouter from "../components/AppRouter"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Home from "../components/layout"
import AboutPage from "../components/AboutPage"
import Seo from "../components/seo"
import "../components/layout"
import * as styles from "../components/index.module.css"


const IndexPage = () => {

  const adDialogRef = useRef(null)
  function closeModal() {
    adDialogRef.current.close()
  }

  useEffect(() => {
    const hasDialogBeenShown = localStorage.getItem('dialogShown');

    if (!hasDialogBeenShown) {
      setTimeout(() => {
        adDialogRef.current.showModal();
        localStorage.setItem('dialogShown', 'true');
      }, 1000);
    }
  }, []);

  return (
    <>
      <nav className="nav">
        <Link className="nav-logo"><img src={require('../images/cavlogo2.png').default}></img></Link>
        <div className="nav-tray">

          <Link to="/AboutNew" className="nav-item nav-item-about">About</Link>
          <Link to="/ContactNew" className="nav-item nav-item-about">Contact</Link>
        </div>
      </nav>

      <main>
        <Home />
      </main>
      <dialog className='ad-dialog' ref={adDialogRef}>
        <button className="ad-close" onClick={closeModal}>X</button>
        <div className="ad-center">
          <div className="showcase-banner"></div>
          <p className="showcase-text">As we stride into an era where art and technology converge in unparalleled ways, the CAVIC Festival stands as a significant landmark, amplifying this union. Slated for November 9th to 11th, envision this not just as a festival but as a vibrant nexus at the heart of CAVIC Hub.
            The CAVIC Festival's allure is its audacious offering: an immersion into a realm where traditional art forms find resonance with modern technological advances. Envision a milieu where poetic verses seamlessly blend with the cadence of machine rhythms, and where classic arts reimagine their potential under the expansive umbrella of technology. Attendees won't be mere spectators; they'll be participants in an evolving narrative of art and tech.
            For those artistically inclined or technologically curious, the festival unfolds as a panoramic view into what the collaborative future holds. It's about bridging the rich legacies of art with the innovative streaks of technology, sparking waves of fresh insights and inspirations.
          </p>
        </div>
        {/* <button className="ad-more">Learn More</button> */}
      </dialog>
    </>
  )

}

export const Head = () => <Seo title="Home" />

export default IndexPage
