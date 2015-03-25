import React from 'react';

function url(url) {
	return 'url(' + url + ')'
}

export default class Section extends React.Component {
	constructor(props) {
		console.log(props);
		var colors = [
			'dodgerBlue',
			'yellow',
			'pink',
			'orange',
			'purple'
		];
		var images = [
			'img/hipster-hand.gif',
			'img/hipster-palms.gif',
			'img/hipster-hills.gif',
			'img/hipster-simply-dope.gif',
			'img/hipster-slackline.gif'
		];
		this.state = {};
		this.style = {
			width: '100%',
			height: '100vh',
			backgroundColor: colors[props.index],
			
		};
		this.elementStyle = {
			width: '100%',
			height: '100vh',
			backgroundColor: colors[props.index],
			position: 'relative'
		}
		this.backgroundStyle = {
			backgroundImage: url(images[props.index]),
			backgroundSize: 'cover',
			// '-webkit-filter': 'blur(2px) grayscale(60%)',
			opacity: '.2',
			width: '100%',
			height: '100%',
			position: 'absolute'
		}
		this.foregroundStyle = {
			fontFamily: 'arial',
			color: 'white',
			fontSize:'400px',
			lineHeight: '400px',
			position: 'absolute'
			// position: 'relative'
		}
	}
	render() {
		return (
			<div style={this.elementStyle}>
				<div style={this.backgroundStyle}></div>
				<div style={this.foregroundStyle}>{this.props.index}</div>
			</div>
		);
	}
}