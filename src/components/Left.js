import React, { Component } from 'react';

import HeaderForm from './HeaderForm';

const initialState = {
	components: [
		<HeaderForm />,
		<HeaderForm />,
		<HeaderForm />,
		<HeaderForm />,
		<HeaderForm />,
	],
};

export default class Left extends Component {
	constructor() {
		super();
		this.state = {
			components: initialState.components,
		};
	}
	componentDidUpdate() {
		this.setState({
			components: initialState.components,
		});
	}
	render() {
		return <div id="left">{this.state.components.map(val => val)}</div>;
	}
}
