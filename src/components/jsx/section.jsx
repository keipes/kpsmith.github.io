import React from 'react';

export default class Section extends React.Component {
	constructor(props) {
		console.log(props);
		this.state = {};
		this.style = {
			width: '100vw',
			height: '100vh',
		};
	}
	render() {
		return <div style={this.style}>{this.props.title}</div>;
	}
}