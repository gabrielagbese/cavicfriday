import * as React from "react"
import AppRouter from "../components/AppRouter"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Home from "../components/layout"
import AboutPage from "../components/AboutPage"
import Seo from "../components/seo"
import "../components/layout"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <>
    <nav className="nav">
      <Link className="nav-logo" to="/"><img src={require('../images/cavlogo2.png').default}></img></Link>
      <div className="nav-tray">

        <Link to="/AboutNew" className="nav-item nav-item-about">About</Link>
        <Link to="/ContactNew" className="nav-item nav-item-about">Contact</Link>
      </div>
    </nav>
    <main>
      <Home />
    </main>
  </>

)

export const Head = () => <Seo title="Home" />

export default IndexPage
