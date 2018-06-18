import React from 'react';
import { Col, MenuItem, ButtonToolbar, Label, Row, Button } from 'react-bootstrap';


class ReportForm extends React.Component {
	
	state = {
		isCollapsed: true
	}	

	renderDropdownButton(title, i) {
		let style = {
			display: 'flex',
			flexDirection: 'column',
			minWidth: '100px',
			padding: '10px'
		}
  	return (
		<div style={style}>
			<Label>{title}</Label>
			<select name={title} >
				<option value="any">Any</option>	
			</select>
		</div>
  	);
	}
	
	onToggle() {
		  this.setState({
			isCollapsed: !this.state.isCollapsed
		  });
    }

	render() {
		let style = {
			display: 'flex',
			flexDirection: 'row'
		}
		const BUTTONS = ['Campus Type', 'Building', 'Room', 'Programs', 'Devices', 'Device Type', 'Vendor', 'Room Type', 'Operating System', 'Computer', 'Person', 'Department'];
		const buttonsInstance = (
			<div>
				<ButtonToolbar style={style}>
					{BUTTONS.map(this.renderDropdownButton)}
				</ButtonToolbar>
				<Button bsStyle="primary" bsSize="xsmall">Generate Report</Button>
			</div>
		);

		return (
			<div>
				<input type="checkbox" onClick={this.onToggle.bind(this)} /><label>&nbsp; Query Report</label>
				{ this.state.isCollapsed === false ? buttonsInstance : null }
				<hr/>
			</div>
		);	
	}
}


export { ReportForm }
