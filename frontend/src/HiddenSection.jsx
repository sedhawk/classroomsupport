import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class HiddenSection extends Component {
	constructor () {
		super();
		this.state ={
			hidden: true
		};
	}

	onToggle = () => {
		this.setState({
			hidden: !this.state.hidden
		});
	}

	render() {
		
		let style = {
			cursor: 'pointer'
		};

		return (
			<div>
				<h4 style={style} onClick={this.onToggle}>
					{this.state.hidden ? this.props.hiddenText : this.props.visibleText}
				</h4>
				{this.state.hidden ? null : this.props.children}
			</div>
		);
	}
}

export { HiddenSection }
