import React from 'react'
import { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import { Link } from "gatsby"

function Projects() {

    const aatRef = useRef(null);
    const afpRef = useRef(null);
    const mbwRef = useRef(null);
    const afdRef = useRef(null);

    const aatWrapperRef = useRef(null);

    function scrollDiv(wrapper, amount) {
        wrapper.current.scrollLeft += wrapper.current.offsetWidth * amount;
    }




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
                                <div className='pd-img'>
                                    <div className='project-slider-wrapper' ref={aatWrapperRef}>
                                        <div className='project-slider-item aat1'></div>
                                        <div className='project-slider-item aat2'></div>
                                        <div className='project-slider-item aat3'></div>
                                        <div className='project-slider-item aat4'></div>
                                        <div className='project-slider-item aat5'></div>
                                    </div>
                                    <div className='slide-buttons'>
                                        <button onClick={() => scrollDiv(aatWrapperRef, -1)}>&lt;</button>
                                        <button onClick={() => scrollDiv(aatWrapperRef, 1)}>&gt;</button>
                                    </div>
                                </div>
                            </div>
                            <div className='pd-text'>Artists and Tech is a program that seeks to fuse arts with new and emerging technology. It seeks to provide new types of art by using technological practices as tools. Aspiring artists collaborate with their technology counterparts to develop art works while solving existing gaps in the art infrastructure. Individuals pitch their ideas to, and seek collaborations within the artistic and technology community resulting in development/execution of new works of art. The projects developed under this alliance are then exhibited in CAVIC.</div>
                        </div>

                    </dialog>

                    <div className='project-item'>
                        <div className='project-image afp-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Art for Peace</p>
                            <p className='project-brief'>The Art for peace workshop utilized artistic expression to empower conflict-affected youth, prevent radicalization, and promote unity in impacted communities.</p>
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

                                "Art for peace" was a four-day workshop program that concluded with an art exhibition on Friday, May 26, held at CAVIC. The project had a primary objective of contributing significantly to the fulfillment of sustainable development goals in Nigeria. It aimed to achieve this by harnessing the transformative power of the arts, providing training and empowerment to affected teenagers. The workshop, which took place in the past, was designed to assist these young individuals in overcoming obstacles and creating a more promising future, all while mitigating the risks of radicalization in the ECOWAS region. Participants were carefully selected from regions heavily impacted by conflicts, warfare, and socio-economic marginalization. Through the medium of arts and crafts, the workshop aimed to prevent radicalization and promote peace and unity within the affected communities, leaving a positive impact in its wake. </div>
                        </div>
                    </dialog>

                    <div className='project-item'>
                        <div className='project-image wbc-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Music Bootcamp</p>
                            <p className='project-brief'>Women in Music Bootcamp Abuja, in partnership with the Spanish Embassy and AECID, aimed to empower female musicians through skill-building and strategic support.</p>
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
                            <div className='pd-text'>The inaugural Women in Music Bootcamp Abuja, which was hosted and facilitated by CAVIC Nigeria in partnership with the Spanish Embassy and The Spanish Agency for International Development Cooperation (AECID), proved to be a transformative empowerment event. Taking place from April 24 to April 28, 2023, the boot camp provided a pivotal platform for female musicians in Nigeria. Through insightful sessions, inspiring talks, and valuable interactions, the event equipped participants with essential skills and strategies to excel in the industry. This initiative, which aligned with Nigeria's sustainable development goals, has undoubtedly left an indelible mark, amplifying the voices and talents of women in the music scene.</div>
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