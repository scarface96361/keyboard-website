import React from 'react';
import KeyboardEmbed from '../components/KeyboardEmbed';

const IMAGES =[
	"keyboard001.jpg",
	"keyboard002.jpg",
	"keyboard003.jpg",
	"keyboard004.jpg",
	"keyboard005.jpg",
	"keyboard006.jpg",
]

const Keyboards = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Center',
				flexDirection: 'column',
				alignItems: 'Center'
			}}
		>
			<h1>My Many Keyboards!</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'Center',
					flexDirection: 'column',
					alignItems: 'Center'
				}}
				>
				{IMAGES.map(image => (
					<KeyboardEmbed source ={image} key={image}/>
				))}
			</div>
		</div>
	);
};

export default Keyboards;
