import React from 'react'
import ordr from '../images/vid/order.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'
import "../components/layout.css"

function qr5() {
    return (
        <div className='art-details'>
            {/* <p className='art-name'>Art Name</p>
            <p className='artist-name '>By Philip Agbese </p> */}
            <img height="400" width="400" src={ordr} className='vid-container'>
                
            </img>
            {/* <div className='ar-container'>
                <p>View art live in Augument Reality with Artevive:</p>
                <div className='ar-sub-container'>
                    <FontAwesomeIcon icon={faGooglePlay} />
                    <FontAwesomeIcon icon={faAppStore} />
                </div>
            </div> */}
        </div>
    )
}

export default qr5