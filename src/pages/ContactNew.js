import React from 'react'
import { Link } from "gatsby"

function ContactNew() {
    return (
        <>
            <nav className="navi">
                <Link className="nav-logo" to="/"><img src={require('../images/cavlogo2.png').default}></img></Link>
                <div className="nav-tray">

                    <Link to="/AboutNew" className="nav-item nav-item-about">About</Link>
                    <Link to="/Projects" className="nav-item nav-item-about">Projects</Link>
                    <Link to="/ContactNew" className="nav-item nav-item-about">Contact</Link>
                </div>
            </nav>
            <div className='contact-page-wrapper'>contact</div>
        </>
    )
}

export default ContactNew