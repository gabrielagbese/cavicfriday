import React from 'react'
import { useEffect } from 'react'

const style = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    zIndex: 999999
};
function Festival() {


    useEffect(() => {

    }, [])


    return (
        <iframe src='https://ecorevived.com/' className='ifr' style={style}>a</iframe>
    )
}

export default Festival