import React from 'react'
import SpaceContent from './space-content';
import objectPath from 'object-path'

export default function Space(props) {

	let currentSpace = props.page;
	let test = currentSpace + "3";

	let titlePath = currentSpace + ".title"
	let title = objectPath.get(SpaceContent, titlePath)

	let imagePath = currentSpace + ".image"
	let image = objectPath.get(SpaceContent, imagePath)

	let image2Path = currentSpace + ".image2"
	let image2 = objectPath.get(SpaceContent, image2Path)

	let image3Path = currentSpace + ".image3"
	let image3 = objectPath.get(SpaceContent, image3Path)

	let image4Path = currentSpace + ".image4"
	let image4 = objectPath.get(SpaceContent, image4Path)

	let price1Path = currentSpace + ".price.price1"
	let price1 = objectPath.get(SpaceContent, price1Path)

	let price2Path = currentSpace + ".price.price2"
	let price2 = objectPath.get(SpaceContent, price2Path)

	let writeupPath = currentSpace + ".writeup"
	let writeup = objectPath.get(SpaceContent, writeupPath)


	return (
		<div className='space-details-wrapper'>
			<p className='space-detail-title'>{title}</p>
			<div className='spaces-inner-content'>
				<div className='space-left'>
					<p className='pricing'>{price1}</p>
					<p className='pricing'>{price2}</p>
					<img className='space-detail-image' src={image}></img>
					{image2 ? <img className='space-detail-image-long' src={image2}></img> : null}
					{image3 ? <img className='space-detail-image' src={image3}></img> : null}
					{image4 ? <img className='space-detail-image' src={image4}></img> : null}

				</div>
				<div className='space-right'>
					<div className='writeup-wrapper'>
						<p className='space-writeup'>{writeup}</p>
						{/* <p className='space-amenities'>Amenities</p> */}
					</div>
				</div>
			</div>
		</div>
	)
}
