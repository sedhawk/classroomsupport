import React from 'react';
import { Label, ButtonToolbar, Panel, PanelGroup } from 'react-bootstrap';
import Toggle from 'react-toggle';

class Finder extends React.Component {
	
	renderDropdownButton(title, i){
		let style = {
			display: 'flex',
			flexDirection: 'column',
			minWidth: '100px',
			padding: '15px'
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
	
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
		  activeKey: '1'
		};
	  }

	  handleSelect(activeKey) {
		this.setState({ activeKey });
	  }

	  render() {

			let style = {
				display: 'flex',
				flexDirection: 'row'
			}
			const BUTTONS = ['Campus Type', 'Building', 'Room'];
			const buttonsInstance = (
				<div>
					<ButtonToolbar style={style}>
						{BUTTONS.map(this.renderDropdownButton)}
					</ButtonToolbar>
				</div>
			);
		
			return (
				<div>
				<label>{buttonsInstance}</label>

				  <PanelGroup
					accordion
					id="accordion-controlled-example"
					activeKey={this.state.activeKey}
					onSelect={this.handleSelect}
					className="panel-width"
				  >
					<Panel eventKey="1">
					  <Panel.Heading>
						<Panel.Title toggle>Department</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 1</Panel.Body>
					</Panel>
					<Panel eventKey="2">
					  <Panel.Heading>
						<Panel.Title toggle>Room Type</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 2</Panel.Body>
					</Panel>
					<Panel eventKey="3">
					  <Panel.Heading>
						<Panel.Title toggle>Person</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 3</Panel.Body>
					</Panel>
					<Panel eventKey="4">
					  <Panel.Heading>
						<Panel.Title toggle>Device Type</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 4</Panel.Body>
					</Panel>
					<Panel eventKey="5">
					  <Panel.Heading>
						<Panel.Title toggle>Devices</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 5</Panel.Body>
					</Panel>
					<Panel eventKey="6">
					  <Panel.Heading>
						<Panel.Title toggle>Vendor</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 6</Panel.Body>
					</Panel>
					<Panel eventKey="7">
					  <Panel.Heading>
						<Panel.Title toggle>Programs</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 7</Panel.Body>
					</Panel>
					<Panel eventKey="8">
					  <Panel.Heading>
						<Panel.Title toggle>Images</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 8</Panel.Body>
					</Panel>
					<Panel eventKey="9">
					  <Panel.Heading>
						<Panel.Title toggle>Notes</Panel.Title>
					  </Panel.Heading>
					  <Panel.Body collapsible>Panel content 9</Panel.Body>
					</Panel>
				  </PanelGroup>
				  </div>
				);
			  }
	}

	//render(<Finder />);
	

	export { Finder }
