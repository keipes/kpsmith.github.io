import React from 'react';
import Body from 'src/components/js/body';

export function main() {
	React.render(React.createElement(Body, null), document.body, function() {
		console.log("body loaded");
	});
}
