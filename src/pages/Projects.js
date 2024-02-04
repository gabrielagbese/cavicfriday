import React from 'react'
import { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import { Link } from "gatsby"

function Projects() {

    const aatRef = useRef(null);
    const afpRef = useRef(null);
    const mbwRef = useRef(null);
    const afdRef = useRef(null);
    const cpRef = useRef(null);
    const festRef = useRef(null);

    const aatWrapperRef = useRef(null);
    const afpWrapperRef = useRef(null);
    const mbWrapperRef = useRef(null);
    const acWrapperRef = useRef(null)
    const cpWrapperRef = useRef(null)
    const festWrapperRef = useRef(null);

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
    function openCp() {
        cpRef.current.showModal();
    }
    function closeCp() {
        cpRef.current.close();
    }
    function openFest() {
        cpRef.current.showModal();
    }
    function closeFest() {
        cpRef.current.close();
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
                                        <button className='slide-button' onClick={() => scrollDiv(aatWrapperRef, -1)}>&lt;</button>
                                        <button className='slide-button' onClick={() => scrollDiv(aatWrapperRef, 1)}>&gt;</button>
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
                                <div className='pd-img'>
                                    <div className='project-slider-wrapper' ref={afpWrapperRef}>
                                        <div className='project-slider-item afp1'></div>
                                        <div className='project-slider-item afp2'></div>
                                        <div className='project-slider-item afp3'></div>
                                        <div className='project-slider-item afp4'></div>
                                        <div className='project-slider-item afp5'></div>
                                    </div>
                                    <div className='slide-buttons'>
                                        <button className='slide-button' onClick={() => scrollDiv(afpWrapperRef, -1)}>&lt;</button>
                                        <button className='slide-button' onClick={() => scrollDiv(afpWrapperRef, 1)}>&gt;</button>
                                    </div>
                                </div>
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
                                <div className='pd-img'>
                                    <div className='project-slider-wrapper' ref={mbWrapperRef}>
                                        <div className='project-slider-item mb1'></div>
                                        <div className='project-slider-item mb2'></div>
                                        <div className='project-slider-item mb3'></div>
                                        <div className='project-slider-item mb4'></div>
                                        <div className='project-slider-item mb5'></div>
                                    </div>
                                    <div className='slide-buttons'>
                                        <button className='slide-button' onClick={() => scrollDiv(mbWrapperRef, -1)}>&lt;</button>
                                        <button className='slide-button' onClick={() => scrollDiv(mbWrapperRef, 1)}>&gt;</button>
                                    </div>
                                </div>
                            </div>
                            <div className='pd-text'>The inaugural Women in Music Bootcamp Abuja, which was hosted and facilitated by CAVIC Nigeria in partnership with the Spanish Embassy and The Spanish Agency for International Development Cooperation (AECID), proved to be a transformative empowerment event. Taking place from April 24 to April 28, 2023, the boot camp provided a pivotal platform for female musicians in Nigeria. Through insightful sessions, inspiring talks, and valuable interactions, the event equipped participants with essential skills and strategies to excel in the industry. This initiative, which aligned with Nigeria's sustainable development goals, has undoubtedly left an indelible mark, amplifying the voices and talents of women in the music scene.</div>
                        </div>
                    </dialog>

                    <div className='project-item'>
                        <div className='project-image ac-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Afrilabs Collaboration</p>
                            <p className='project-brief'>The Afrilabs Annual Gathering united African tech hubs, startups, and innovators in Abuja to collaborate, and share knowledge, highlighting unity among member hubs supporting entrepreneurs.</p>
                            <button className='project-button' onClick={openAfd}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={afdRef} >
                        <button onClick={closeAfd}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>Afrilabs Collaboration</p>
                                <div className='pd-img'>
                                    <div className='project-slider-wrapper' ref={acWrapperRef}>
                                        <div className='project-slider-item ac1'></div>
                                        <div className='project-slider-item ac2'></div>
                                        <div className='project-slider-item ac3'></div>
                                        <div className='project-slider-item ac4'></div>
                                        <div className='project-slider-item ac5'></div>
                                    </div>
                                    <div className='slide-buttons'>
                                        <button className='slide-button' onClick={() => scrollDiv(acWrapperRef, -1)}>&lt;</button>
                                        <button className='slide-button' onClick={() => scrollDiv(acWrapperRef, 1)}>&gt;</button>
                                    </div>
                                </div>
                            </div>
                            <div className='pd-text'>The 2021 Annual Gathering of Afrilabs in Abuja, Nigeria, was a momentous event that brought together tech hubs, startups, and innovators from across the African continent. This gathering served as a platform for collaboration, knowledge sharing, and showcasing the immense potential that Africa holds in the tech and innovation sectors. With representation from over 50 African countries, the event highlighted the unity and shared vision among African tech hubs and stakeholders. Afrilabs is a network organisation supporting Innovation Centers across African countries since 2011, founded upon the mission of building a community around the rapidly emerging technology hubs in Africa. Afrilabs currently has a membership of over 400 hubs spread across the African continent. These hubs serve as centres that provide support to African entrepreneurs, innovators, developers, and youths.</div>
                        </div>
                    </dialog>
                    <div className='project-item'>
                        <div className='project-image cp-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>Creative Arts Showcase</p>
                            <p className='project-brief'>Creative Arts Showcase is a collaboration with the British Council where we platform Abuja-based creatives</p>
                            <button className='project-button' onClick={openCp}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={cpRef} >
                        <button onClick={closeCp}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>Creative Arts Showcase</p>%%
                                <div className='pd-img'>
                                    <div className='project-slider-wrapper' ref={cpWrapperRef}>
                                        <div className='project-slider-item cp1'></div>
                                        <div className='project-slider-item aat2'></div>
                                        <div className='project-slider-item aat3'></div>
                                        <div className='project-slider-item aat4'></div>
                                        <div className='project-slider-item aat5'></div>
                                    </div>
                                    <div className='slide-buttons'>
                                        <button className='slide-button' onClick={() => scrollDiv(cpWrapperRef, -1)}>&lt;</button>
                                        <button className='slide-button' onClick={() => scrollDiv(cpWrapperRef, 1)}>&gt;</button>
                                    </div>
                                </div>
                            </div>
                            <div className='pd-text'>Creative Arts Showcase is a collaboration with the British Council where we platform Abuja-based creatives</div>
                        </div>

                    </dialog>

                    <div className='project-item'>
                        <div className='project-image fest-img'></div>
                        <div className='project-info'>
                            <p className='project-title'>CAVIC Festival of Creativity & Technology</p>
                            <p className='project-brief'>An experience where technology met the imagination of artists. From digital art installations to tech-driven performances.</p>
                            <button className='project-button' onClick={openFest}>Read More</button>
                        </div>
                    </div>

                    <dialog className='project-dialog' ref={festRef} >
                        <button onClick={closeCp}>close</button>
                        <div className='project-dialog-wrapper'>
                            <div className='pd-name-img'>
                                <p className='pd-name'>CAVIC Festival of Creativity & Technology</p>
                                <div className='pd-img'>
                                    <div className='project-slider-wrapper' ref={festWrapperRef}>
                                        <div className='project-slider-item fest1'></div>
                                        <div className='project-slider-item fest2'></div>
                                        <div className='project-slider-item fest3'></div>
                                        <div className='project-slider-item fest4'></div>
                                        <div className='project-slider-item fest5'></div>
                                    </div>
                                    <div className='slide-buttons'>
                                        <button className='slide-button' onClick={() => scrollDiv(festWrapperRef, -1)}>&lt;</button>
                                        <button className='slide-button' onClick={() => scrollDiv(festWrapperRef, 1)}>&gt;</button>
                                    </div>
                                </div>
                            </div>
                            <div className='pd-text'>
                                The CAVIC Festival of Creativity and Technology opened and invited you to witness a groundbreaking fusion of art and technology. The festival was not just an event; it was a celebration of innovation, creativity, and the endless possibilities that emerged when these two worlds collided. Attendees joined us on a journey where cutting-edge technology met the boundless imagination of artists. From digital art installations to tech-driven performances, every piece you saw was a testament to the power of creative collaboration.</div>
                        </div>

                    </dialog>

                </div>

            </div>

        </>
    )
}

export default Projects