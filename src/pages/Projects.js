import React from 'react'
import { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import { Link } from "gatsby"

function Projects() {

    const aatRef = useRef(null);
    const afpRef = useRef(null);
    const mbwRef = useRef(null);
    const afdRef = useRef(null);



    function openAat() {
        aatRef.current.showModal();
    }
    function closeAat() {
        aatRef.current.close();
    }

    function openAfp() {
        afpRef.current.showModal();
    }
    function closeAfp() {
        afpRef.current.close();
    }

    function openMbw() {
        mbwRef.current.showModal();
    }
    function closeMbw() {
        mbwRef.current.close();
    }

    function openAfd() {
        afdRef.current.showModal();
    }
    function closeAfd() {
        afdRef.current.close();
    }

    return (
        <>
            <nav className="navi">
                <Link className="nav-logo" to="/"><img src={require('../images/cavlogo2.png').default}></img></Link>
                <div className="nav-tray">

                    <Link to="/AboutNew" className="nav-item nav-item-about">About</Link>
                    <Link className="nav-item nav-item-about">Projects</Link>
                    <Link to="/ContactNew" className="nav-item nav-item-about">Contact</Link>

                </div>
            </nav>
            <div className='project-page-wrapper'>
                <div className='project-side'>
                    <p className='project-page-title'>Projects</p>
                    <p className='project-page-intro'>CAVIC Africa, often in collaboration with various organizations, consistently spearheads a multitude of impactful programs within the community. </p>
                </div>
                <div className='project-content'>
                    <div className='project-item'>
                        <div className='project-image aat-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Arts and tech</p>
                            <p className='project-brief'>Artists and Tech is a program that seeks to fuse arts with new and emerging technology. It seeks to provide new types of art by using technological practices as tools. </p>
                            <button className='project-button' onClick={openAat}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={aatRef} >
                        <button onClick={closeAat}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>Arts and Tech</p>
                                <div className='pd-img pd-aat'></div>
                            </div>
                            <div className='pd-text'>Artists and Tech is a program that seeks to fuse arts with new and emerging technology. It seeks to provide new types of art by using technological practices as tools. Aspiring artists collaborate with their technology counterparts to develop art works while solving existing gaps in the art infrastructure. Individuals pitch their ideas to, and seek collaborations within the artistic and technology community resulting in development/execution of new works of art. The projects developed under this alliance are then exhibited in CAVIC.</div>
                        </div>

                    </dialog>

                    <div className='project-item'>
                        <div className='project-image afp-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Art for Peace</p>
                            <p className='project-brief'></p>
                            <button className='project-button' onClick={openAfp}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={afpRef} >
                        <button onClick={closeAfp}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>Art For Peace</p>
                                <div className='pd-img pd-afp'></div>
                            </div>
                            <div className='pd-text'>
                                Art for peace was a 4 days workshop program which ended with an art exhibition on Friday May 26 held at CAVIC. The project’s primary objective is to make a substantive contribution to the fulfillment of sustainable development goals in Nigeria by harnessing the transformative power of the arts through the training and empowerment of affected teenagers. The workshop aims to help them overcome obstacles and create a brighter future while safeguarding against radicalization in the ECOWAS region. Participants for the workshop were selected from areas heavily impacted by conflicts, warfare, and socio-economic marginalization.Through the medium of arts and crafts, the workshop aimed to prevent radicalization and foster peace and unity across affected communities.  </div>
                        </div>
                    </dialog>

                    <div className='project-item'>
                        <div className='project-image wbc-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Music Bootcamp Workshop</p>
                            <p className='project-brief'></p>
                            <button className='project-button' onClick={openMbw}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={mbwRef} >
                        <button onClick={closeMbw}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>Music Bootcamp</p>
                                <div className='pd-img pd-mb'></div>
                            </div>
                            <div className='pd-text'>Artists and Tech is a program that seeks to fuse arts with new and emerging technology. It seeks to provide new types of art by using technological practices as tools. Aspiring artists collaborate with their technology counterparts to develop art works while solving existing gaps in the art infrastructure. Individuals pitch their ideas to, and seek collaborations within the artistic and technology community resulting in development/execution of new works of art. The projects developed under this alliance are then exhibited in CAVIC.</div>
                        </div>
                    </dialog>

                    <div className='project-item'>
                        <div className='project-image ac-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Afrilabs Collaboration</p>
                            <p className='project-brief'></p>
                            <button className='project-button' onClick={openAfd}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={afdRef} >
                        <button onClick={closeAfd}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>Afrilabs Collaboration</p>
                                <div className='pd-img pd-ac'></div>
                            </div>
                            <div className='pd-text'>Artists and Tech is a program that seeks to fuse arts with new and emerging technology. It seeks to provide new types of art by using technological practices as tools. Aspiring artists collaborate with their technology counterparts to develop art works while solving existing gaps in the art infrastructure. Individuals pitch their ideas to, and seek collaborations within the artistic and technology community resulting in development/execution of new works of art. The projects developed under this alliance are then exhibited in CAVIC.</div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    )
}

export default Projects