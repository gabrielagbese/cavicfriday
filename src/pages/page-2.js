import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <>
    <nav className="nav">
      <Link className="nav-logo" to="/"><img src={require('../images/cavlogo2.png').default}></img></Link>

      <div className="nav-tray">
        <p className="nav-item nav-item-about">Abouts</p>
        <Link to="/page-2">About</Link>
        <p className="nav-item">Contact</p>
      </div>
    </nav>
  </>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
