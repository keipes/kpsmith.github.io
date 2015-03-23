import React from 'react';

var Body =  React.createClass({displayName: "Body",
	render: function() {
		return (React.createElement("p", null, "hello"));
	}
})

export function bootstrap() {
	React.renderComponent(
		React.createElement(Body, null)
	, document.body);
}