import React from 'react'
import SpaceContent from './space-content';
import objectPath from 'object-path'

export default function Space(props) {

	let currentSpace = props.page;
	let test = currentSpace+"3";

	let titlePath = currentSpace+".title" 
	let title = objectPath.get(SpaceContent, titlePath)

	let imagePath = currentSpace+".image"
	let image = objectPath.get(SpaceContent, imagePath)

	let price1Path = currentSpace+".price.price1"
	let price1 = objectPath.get(SpaceContent, price1Path)

	let price2Path = currentSpace+".price.price2"
	let price2 = objectPath.get(SpaceContent, price2Path)

	let writeupPath = currentSpace+".writeup"
	let writeup = objectPath.get(SpaceContent, writeupPath)


	return (
		<div className='space-details-wrapper'>
			<p className='space-detail-title'>{title}</p>
			<div className='spaces-inner-content'>
				<div className='space-left'>
					<img className='space-detail-image' src={image}></img>
					<p className='pricing'>{price1}</p>
					<p className='pricing'>{price2}</p>
				</div>
				<div className='space-right'>
					<div className='writeup-wrapper'>
						<p className='space-writeup'>{writeup}</p>
						<p className='space-amenities'>Amenities</p>
					</div>
				</div>
			</div>
		</div>
	)
}
