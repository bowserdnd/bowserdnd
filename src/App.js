import React, { Component } from 'react';
import dragula from 'react-dragula';

import HeaderForm from './components/HeaderForm';
import { Button } from 'semantic-ui-react';

export default class App extends Component {
	constructor() {
		super();
		this.comp = this;
		this.state = {
			header: <HeaderForm />,
			headerArr: [this.getHeaderForm()],
		};
	}
	componentDidMount() {
		dragula(
			[
				document.querySelector('#left'),
				document.querySelector('#right1'),
				document.querySelector('#right2'),
				document.querySelector('#right3'),
				document.querySelector('#right4'),
				document.querySelector('#right5'),
				document.querySelector('#right6'),
				document.querySelector('#right7'),
			],
			{
				// copy: function(el, source) {
				// 	return source === document.querySelector('#left');
				// },
				accepts: function(el, target) {
					return target !== document.querySelector('#left');
				},
				removeOnSpill: true,
			}
		)
			.on('drop', async (el, target, source, sibling) => {
				if (
					source === document.querySelector('#left') &&
					target === document.querySelector('#right')
				) {
					// headerIdx++;
					await this.setState({
						header: <HeaderForm />,
					});
					console.log(`Element ${el.getAttribute('num')} was moved!`);
				}
			})
			.on('remove', function(el) {
				console.log(`Element ${el.getAttribute('num')} was removed!`);
			})
			.on('drag', async () => {
				await this.setState({
					header: null,
				});
			});
	}

	getHeaderForm = () => {
		return (
			<div>
				<HeaderForm />
			</div>
		);
	};

	addHeader = () => {
		this.setState({
			headerArr: [...this.state.headerArr, this.getHeaderForm()],
		});
	};

	render() {
		return (
			<div className="container">
				<div>
					<Button primary onClick={this.addHeader}>
						Add Header
					</Button>
				</div>
				<div id="left">{this.state.headerArr.map(val => val)}</div>
				<div className="right-container" id="right">
					<div id="right1" className="Header" />
					<div id="right2" className="three" />
					<div id="right3" className="three" />
					<div id="right4" className="three" />
					<div id="right5" className="four" />
					<div id="right6" className="five" />
					<div id="right7" className="five" />
				</div>
			</div>
		);
	}
}
