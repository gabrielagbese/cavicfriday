import React from 'react'
import qrvid2 from '../images/vid/qrvid2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'
import "../components/layout.css"

function qr2() {
    return (
        <div className='art-details'>
            {/* <p className='art-name'>Art Name</p>
            <p className='artist-name '>By Philip Agbese </p> */}
            <video height="400" width="400" controls autoPlay muted className='vid-container'>
                <source src={qrvid2} type="video/mp4" />
            </video>
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

export default qr2