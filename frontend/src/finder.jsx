import React from 'react';
import { Grid, Row, Col, Label, Button, ButtonToolbar, Panel, PanelGroup } from 'react-bootstrap';
import Switch from "react-switch";
//import Toggle from 'react-toggle';
import { EditSwitch } from './editSwitch';
import { HiddenSection } from './HiddenSection';

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
			activeKey: '1',
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
/*			const editSwitch = (
				<label>
					<Toggle
						defaultChecked={this.state.baconIsReady}
						onChange={this.handleBaconChange} />
					<span>Wrapper label tag</span>
				</label>
			);
*/
		
			return (
				<div>
					<Grid>
						<Row className="App-left">
							<Col xs={6} md={8}>
						  		{ buttonsInstance }
							</Col>
							<Col xs={6} md={4}>
								<EditSwitch
									checked={this.state.checked}
									className="react-switch"
								/>
							</Col>
					  	</Row>
					</Grid>

				  	<PanelGroup
						accordion
						id="accordion-controlled-example"
						activeKey={this.state.activeKey}
						onSelect={this.handleSelect}
						className="panel-width"
				  	>

					{/* DEPARTMENT */}
					<Panel eventKey="1">
					  	<Panel.Heading>
							<Panel.Title toggle>Department</Panel.Title>
					  	</Panel.Heading>
						<Panel.Body collapsible>
							<textarea readOnly="true" class="text-area">Read Only text area. Department name(s) can be added with dropdown menu below</textarea>
							<select>
								<option>DeptName</option>
							</select>
							<Button bsStyle="primary" bsSize="xsmall">+</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* ROOM TYPE */}
					<Panel eventKey="2">
						<Panel.Heading>
							<Panel.Title toggle>Room Type</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<textarea readOnly="true" class="text-area">Read Only text area. Room types(s) can be added with dropdown menu below</textarea>
							<select>
								<option>collaboration lab</option>
							</select>
							<Button bsStyle="primary" bsSize="xsmall">+</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* PERSON */}
					<Panel eventKey="3">
						<Panel.Heading>
							<Panel.Title toggle>Person</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<textarea readOnly="true" class="text-area">Read Only text area. Main POC name(s) can be added with dropdown menu below</textarea>
							<select>
								<option>Billy Joe</option>
							</select>
							<Button bsStyle="primary" bsSize="xsmall">+</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* DEVICE TYPE */}
					<Panel eventKey="4">
						<Panel.Heading>
							<Panel.Title toggle>Device Type</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<textarea readOnly="true" class="text-area">Read Only text area. Device type(s) can be added with dropdown menu below</textarea>
							<select>
								<option>Processor</option><option>Extron TP</option>
							</select>
							<Button bsStyle="primary" bsSize="xsmall">+</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* DEVICES */}
					<Panel eventKey="5">
						<Panel.Heading>
							<Panel.Title toggle>Devices</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<textarea readOnly="true" class="text-area">Read Only text area. Specific device names can be added with dropdown menu below</textarea>
							<select><option>DeptName</option></select>
							<Button bsStyle="primary" bsSize="xsmall">+</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* VENDOR */}
					<Panel eventKey="6">
						<Panel.Heading>
							<Panel.Title toggle>Vendor</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<textarea readOnly="true" class="text-area">Read Only text area. Vendor name(s) can be added with dropdown menu below</textarea>
							<select>
								<option>Troxel</option><option>CCS</option>
								<option>In House</option>
							</select>
							<Button bsStyle="primary" bsSize="xsmall">+</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* PROGRAMS */}
					<Panel eventKey="7">
						<Panel.Heading>
							<Panel.Title toggle>Programs</Panel.Title>
						</Panel.Heading>
					  	<Panel.Body collapsible>
							<input type="text" name="programs"/>
							<Button bsStyle="primary" bsSize="xsmall">Upload</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* IMAGES */}
					<Panel eventKey="8">
						<Panel.Heading>
							<Panel.Title toggle>Images</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<input type="text" name="images"/>
							<Button bsStyle="primary" bsSize="xsmall">Upload</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>

					{/* NOTES */}
					<Panel eventKey="9">
						<Panel.Heading>
							<Panel.Title toggle>Notes</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
							<input type="text" name="Misc_notes"/>
							<Button bsStyle="primary" bsSize="xsmall">Save</Button>
							<HiddenSection hiddenText="..." visibleText="_">
								<h4> Hidden user auto tag info </h4>
							</HiddenSection>		
						</Panel.Body>
					</Panel>
				  </PanelGroup>
				  <hr/>
				  </div>
				);
			  }
	}

	export { Finder }
