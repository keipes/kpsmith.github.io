import React from 'react';

var Content =  React.createClass({displayName: "Content",
	render: function() {
		return (React.createElement("p", null, "hello"));
	}
})

export function bootstrap() {
	React.renderComponent(
		React.createElement(Content, null)
	, document.body);
}