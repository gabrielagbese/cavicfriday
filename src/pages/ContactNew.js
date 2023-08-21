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
            <div className='contact-page-wrapper'>
                <p className='contact-heading'>Contact Us</p>
                <div className='contact-inner'>

                    <div className='contact-details'>
                        <p className='contact-label'>Email:</p>
                        <p className='contact-content'>cavicnigeria@gmail.com</p>
                        <p className='contact-label'>Phone:</p>
                        <p className='contact-content'>+2348035901047</p>
                        <p className='contact-label'>Address:</p>
                        <p className='contact-content'>No. 30, Agadez Cres., Wuse ll, Abuja, Nigeria.</p>
                        <p className='contact-label'>Social:</p>
                        <div className='contact-social'>
                            <p><a className='social-item' href='https://www.instagram.com/cavicnigeria/'>Instagram</a></p>
                            <p><a className='social-item' href='https://www.facebook.com/CAVICNIGERIA'>Facebook</a></p>
                        </div>
                    </div>
                    <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.913564726642!2d7.468620675123753!3d9.0716389909914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b97751e3fa7%3A0x578f16d3c1ad264c!2sCAVIC%20HUB!5e0!3m2!1sen!2shu!4v1692387681849!5m2!1sen!2shu" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
            </div>
        </>
    )
}

export default ContactNew