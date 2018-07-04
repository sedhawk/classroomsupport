import React, { Component } from 'react';

class Instructions extends Component {

	state = {
		isCollapsed: true
	}

	onToggle() {
		this.setState({
			isCollapsed: !this.state.isCollapsed
		});
	}

	render() {
		
		const textArea = (
			<div>
				<textarea className="text-area-notes">Shiz rizzle metus crackalackin arcu the bizzle fizzle. Gizzle posuere. Sizzle nizzle ante.</textarea>
			</div>
		);

		return (
			<div>
				<input type="checkbox" onClick={this.onToggle.bind(this)}/>
				<label> &nbsp; Specialized Instructions</label>
				{ this.state.isCollapsed === false ? textArea : null }
				<hr/>
			</div>
		);

	}
}

export { Instructions }
