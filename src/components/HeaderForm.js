import React, { Component } from 'react';
import Header from './Header';
import { Card, Form } from 'semantic-ui-react';

import { Button } from 'semantic-ui-react';

export default class HeaderForm extends Component {
	constructor() {
		super();
		this.state = {
			content: '',

			color: 'white',
			fontSize: '12px',

			edit: true,
		};
		this.switchEdit = this.switchEdit.bind(this);
	}

	switchEdit(evt) {
		evt.preventDefault();
		console.log(this.state.edit);
		this.setState({
			edit: !this.state.edit,
		});
	}

	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
		console.log(this.state.content);
	};

	render() {
		let { color, fontSize } = this.state;
		return this.state.edit ? (
			<Card id={this.props.id}>
				Header Form
				<Form onSubmit={this.switchEdit}>
					<label htmlFor="content">Content:</label>
					<Form.Input
						type="text"
						name="content"
						value={this.state.content}
						onChange={this.handleChange}
					/>
					<label htmlFor="color">Color</label>

					<Form.Input
						type="text"
						name="color"
						value={this.state.color}
						onChange={this.handleChange}
					/>
					<label htmlFor="text-size">Text Size:</label>
					<Form.Input
						type="text"
						name="fontSize"
						value={this.state.fontSize}
						onChange={this.handleChange}
					/>

					<button primary type="submit">
						Edit
					</button>
				</Form>
			</Card>
		) : (
			<div>
				<Header
					style={{ color, fontSize }}
					content={this.state.content}
					id={this.props.id}
				/>
				<button primary onClick={this.switchEdit} style={{ marginTop: '10px' }}>
					Edit
				</button>
			</div>
		);
	}
}
