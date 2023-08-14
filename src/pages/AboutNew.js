import React from 'react'
import { Link } from "gatsby"

function AboutNew() {
    return (
        <>
            <nav className="nav">
                <Link className="nav-logo" to="/"><img src={require('../images/cavlogo2.png').default}></img></Link>
                <div className="nav-tray">

                    <Link className="nav-item nav-item-about">About</Link>
                    <Link to="/ContactNew" className="nav-item nav-item-about">Contact</Link>
                </div>
            </nav>
            <div className='about-page-wrapper'>
                <p className='ab-header'>About Us</p>
                <div className='ab-segment'>
                    <div className='ab-segment-image asi-1'></div>
                    <p className='ab-segment-writing'>There are currently few services available to up and coming artists and few platforms that allow or provide them with start-up support or enable them to link up with other artists in similar situations.  In a city such as Abuja where rents are exorbitant and many artists arrive with just their talents and their tools, finding the space, support and networks that enable them to express and grow that talent is oftentimes impossible, leading to a stunting of creative expression.</p>
                </div>
                <div className='ab-segment-reverse'>
                    <div className='ab-segment-image asi-2'></div>
                    <p className='ab-segment-writing'>CAVIC was established to fill a need within our cultural landscape occasioned by the existing struggles and isolation of local artists. It addresses the disunity and other impediments to growth that exist among the creative community.This creative space serves as a resource centre, a meeting place and melting pot for creative practitioners and organisations, CAVIC provides a supportive and creative space where innovative professionals from diverse artistic fields exploit their creative genius to foster social change. </p>
                </div>
                <div className='ab-segment'>
                    <div className='ab-segment-image asi-3'></div>
                    <p className='ab-segment-writing'>CAVIC also builds capacity and confidence across the creative workforce, ignited by creative education and skills provision. This space serves as an open resource for a range of collaborative youth meetings and efforts, and as an exhibition centre for photography and visual art, among other artistic endeavours. It also undertakes art promotion; shows and exhibitions; training at both physical and virtual spaces while also providing access to online marketplaces. CAVIC is a creative hub that provides artists with access to facilities to enable them pick up new skills, make them more visible and help them generate wealth in the creative ecosystem of Africa, whether they are visual artists, photographers, performers, designers, musicians, curators, consumers of creative works or suppliers of creative materials. It is strategically located in the heart of Abuja, the federal capital city of Nigeria.</p>
                </div>
                <div className='ab-segment-reverse'>
                    <div className='ab-segment-image asi-4'></div>
                    <p className='ab-segment-writing'>CAVIC is a great way of keeping artists and designers connected, with emphasis on interaction and cross-cultural artistic exchanges between national, regional and international artists. Serving as a promoter, CAVIC pulls together resources within its network to organize exhibitions as well as host public information and art appreciation events for the wider community including schools, specialist sectors and the members of the general public establishing a coffee-shop environment for creativity which attracts members of CAVIC’s various publics.</p>
                </div>
            </div>
        </>
    )
}

export default AboutNew