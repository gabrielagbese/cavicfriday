import React from 'react'
import { useEffect, useReducer } from 'react';
import SpacesContent from './spaces-content';
import { useState } from 'react';
import gsap from 'gsap';
import ScrollContainer from 'react-indiana-drag-scroll'
import Space from './Space';



export default function Spaces() {
    const [mainImage, setMainImage] = useState(SpacesContent.pics1)
    const [nextMainImage, setNextMainImage] = useState(SpacesContent.pics2)
    const [index, setIndex] = useState(1)
    const [pageProp, setPageProp] = useState("conference")
    let mainImages = [SpacesContent.pics1, SpacesContent.pics2, SpacesContent.pics3]
    let nextMainImages = [SpacesContent.pics2, SpacesContent.pics3, SpacesContent.pics1]

    let transition1 = gsap.timeline()
    let transition2 = gsap.timeline()
    let transition3 = gsap.timeline()

    let smm = gsap.matchMedia()
    let readMoreTimeline = gsap.timeline()

    function readMore(a) {
        setPageProp(a)
        //
        smm.add(" (min-width: 721px)", () => {
            readMoreTimeline.to(".space-details", { x: "-70vw" })
        })
        //mobile
        smm.add("(max-width: 720px)", () => {
            readMoreTimeline.set(".space-details", { x: "-100vw", y: "100vh", opacity: 1 })
            readMoreTimeline.to(".space-details", { y: "0vh" })
        })
    }
    function readLess() {
        smm.add(" (min-width: 721px)", () => {
            readMoreTimeline.to(".space-details", { x: "0vw" })
        })
        //mobile
        smm.add("(max-width: 720px)", () => {
            readMoreTimeline.to(".space-details", { y: "100vh", opacity: 0 },)
        })
    }




    // useEffect(() => {

    //     const track = document.querySelector(".spaces-scroller-inner")
    //     window.onmousedown = e => {
    //         track.dataset.mouseDownAt = e.clientX;
    //     }

    //     window.ontouchstart = e => {
    //         track.dataset.mouseDownAt = e.touches[0].clientX;
    //     }

    //     window.onmouseup = () => {
    //         track.dataset.mouseDownAt = "0";
    //         track.dataset.prevPercentage = track.dataset.percentage
    //     }

    //     window.ontouchend = () => {
    //         track.dataset.mouseDownAt = "0";
    //         track.dataset.prevPercentage = track.dataset.percentage
    //     }

    //     window.onmousemove = e => {

    //         if (track.dataset.mouseDownAt === "0") return;


    //         const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    //             maxDelta = window.innerWidth / 1.5

    //         const percentage = (mouseDelta / maxDelta) * -100,
    //             nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    //             nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -250);

    //         track.dataset.percentage = nextPercentage;

    //         track.animate({
    //             transform: `translate(${nextPercentage}%, 0%)`
    //         }, { duration: 1200, fill: "forwards" });

    //         for (const image of track.getElementsByClassName("space-card-image")) {
    //             image.animate({
    //                 objectPosition: `${100 + nextPercentage / 2.5}% center`
    //             }, { duration: 1200, fill: "forwards" });
    //         }


    //     }

    //     window.ontouchmove = e => {

    //         if (track.dataset.mouseDownAt === "0") return;


    //         const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX,
    //             maxDelta = window.innerWidth / 2

    //         const percentage = (mouseDelta / maxDelta) * -100,
    //             nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    //             nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -475);

    //         track.dataset.percentage = nextPercentage;

    //         track.animate({
    //             transform: `translate(${nextPercentage}%, 0%)`
    //         }, { duration: 900, fill: "forwards" });

    //         for (const image of track.getElementsByClassName("space-card-image")) {
    //             image.animate({
    //                 objectPosition: `${100 + nextPercentage / 5}% center`
    //             }, { duration: 900, fill: "forwards" });
    //         }


    //     }
    // },);


    return (
        <div className='spaces-wrapper'>
            <div className='spaces-container'>
                <div className='spaces-main-text'>
                    <p className='spaces-heading'>Spaces</p>
                    {/* <p> CAVIC provides an array of spaces, including co-working spaces, event spaces, a conference room, and a fully equipped photo studio.</p>                    <button onClick={() => {nextElements()}}> next </button> */}
                    <div className='spaces-list list-top' onClick={() => { readMore("maker") }}>
                        Maker Space
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("gallery") }}>
                        Gallery/Exhibition Space
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("dedicated") }}>
                        Dedicated Desk Space
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("conference") }}>
                        Conference Room
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("training") }}>
                        Training/Workshop Space
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("studio") }}>
                        Studio Space
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("private") }}>
                        Private Offices
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("coworking") }}>
                        Co-Working Space
                    </div>
                    <div className='spaces-list' onClick={() => { readMore("chill") }}>
                        Chill Zone
                    </div>
                    <div className='spaces-list '>
                        Library
                    </div>
                </div>

                <div className='spaces-scroller'>
                    <div className="spaces-scroller-inner" data-mouse-down-at="0" data-prev-percentage="0">
                        <div className='space-space'></div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics11} className='space-card-image' onClick={() => { readMore("maker") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("maker") }}>Maker Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics1} className='space-card-image' onClick={() => { readMore("gallery") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("gallery") }}>Gallery Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics8} className='space-card-image' onClick={() => { readMore("dedicated") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("dedicated") }}>Dedicated Desk Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics10} className='space-card-image' onClick={() => { readMore("conference") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("conference") }}>Conference Room</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics6} className='space-card-image' onClick={() => { readMore("training") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("training") }}>Training Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics5} className='space-card-image' onClick={() => { readMore("studio") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("studio") }}>Studio Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics4} className='space-card-image' onClick={() => { readMore("private") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("private") }}>Private Offices</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics3} className='space-card-image' onClick={() => { readMore("coworking") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("coworking") }}>CoWorking Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics2} className='space-card-image' onClick={() => { readMore("gallery") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("gallery") }}>Chill Space</p>
                        </div>
                        <div className='space-card'>
                            <img src={SpacesContent.pics12} className='space-card-image' onClick={() => { readMore("library") }} draggable="false"></img>
                            <p className='space-card-name' onClick={() => { readMore("library") }}>Library</p>
                        </div>
                        <div className='space-space'></div>
                    </div>
                </div>


                {/* <div className='spaces-main-image'>
                <div className='main-image-wrapper'>
                    <div className='transition-main-image'></div>
                    <img className='main-image' src={mainImage}></img>
                    <div className='main-image-details'></div>
                </div>
            </div>
            <div className='spaces-preview-image' onClick={() => {nextElements()}}>
                <div className='transition-preview-image'></div>
                <img className='main-image' src={nextMainImage}></img>
            </div> */}

            </div>
            <div className='space-details'>
                <button onClick={() => { readLess() }} className="close-button"> close </button>
                <Space page={pageProp} />
            </div>
        </div>
    )
}
