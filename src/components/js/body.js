import React from 'react';
import Section from 'src/components/js/section'

export default class Body extends React.Component {
	constructor(props) {
		this.state = {
			elements: [0, 1, 2, 3, 4]
		}
		this.backgroundDivStyle = {
			backgroundColor: '#fcfcfc',
		}
		this.centerContentStyle = {
			margin: '0 auto',
			width: '90%',
			boxShadow: '0 0 4px rgba(0,0,0,.4)'
		}
	}

	render() {
		var elements = [];
		for (var i = 0; i < this.state.elements.length; i++) {
			elements.push(React.createElement(Section, {index: this.state.elements[i]}));
		}
		return (
			React.createElement("div", {style: this.backgroundDivStyle}, 
				React.createElement("div", {style: this.centerContentStyle}, 
					elements
				)
			)
		);
	}
}