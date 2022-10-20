import React from 'react';
import KeyboardEmbed from '../components/KeyboardEmbed';


const IMAGES =[
	{id: 1,src: "keyboard001.jpg", youtube: "https://youtu.be/2YxYSqaR9_U", description: 'This is my personal keyboard! Its built using AKKO Neon keycaps, hand lubed glorious pandas, and a GMMK pro with bandaid moded durock v2 stabs.' },
	{id: 2,src: "keyboard002.jpg", youtube: "https://youtu.be/GQ1nijZMh_4", description: `This is the first comission keyboard I ever built. It uses a GMMK pro base and nk silk reds alongside gmmk ocean blue keycaps.`},
	{id: 3,src: "keyboard003.jpg", youtube: "https://youtu.be/WwtxdDv7cVU", description: 'This is the Second comission keyboard I built. This was for my little brother and used a gmmk2 65% alongisde lubed glorious pandas and gsv2 stabilizers.' },
	{id: 4,src: "keyboard004.jpg", youtube: "https://youtu.be/5QfURUpBXI4", description: "This was the first silent keyboard I built. it was built using a gmmk2 95%, boba U4T's and the glorious ice keycaps." },
	{id: 5,src: "keyboard005.jpg", youtube: "https://youtu.be/zCaxgVVu4zs", description: "Second silent keyboard I built using a gmmk pro as a base. PBT octopus keycaps and boba U4 silent linear switches." },
	{id: 6,src: "keyboard006.jpg", youtube: "https://youtu.be/bPEy-d5sVGw", description: "Description pending" },
	{id: 7,src: "keyboard007.jpg", youtube: "https://youtu.be/2uZ3H1AKk-8", description: "A GMMK2 with lubed kailh pro purple switches, gpbt celestial fire keycaps and relubed stabilizers."},
]
//const text = "hello world";

const Keyboards = () => {
	return (
		<div className='page-body'>
			<h1>My Many Keyboards!</h1>
			<div className='entry-holder'>
				{IMAGES.map(({id, src, youtube, description}) => (
					<KeyboardEmbed key={id} source={src} description={description} youtube={youtube}/>
				))}
			</div>
		</div>
	);
};

export default Keyboards;
