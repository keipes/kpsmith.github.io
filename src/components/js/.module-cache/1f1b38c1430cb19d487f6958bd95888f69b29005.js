import React from 'react';

module.exports = React.createClass({displayName: "exports",
	render: function() {
		console.log("render");
		return (React.createElement("p", null, "hello"));
	}
})
