import React from 'react';
import Section from 'src/components/js/section'

export default class Body extends React.Component {
	constructor(props) {
		this.state = {
			elements: [1,2,3]
		}
	}

	render() {
		var elements = [];
		for (var i = 0; i < this.state.elements.length; i++) {
			elements.push(React.createElement(Section, {title: this.state.elements[i]}));
		}
		return React.createElement("div", null, elements);
	}
}