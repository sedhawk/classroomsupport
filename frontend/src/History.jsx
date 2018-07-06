import React from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class History extends React.Component {
	render(){
		return(
			<Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
			  <Row className="clearfix">
				<Col sm={12}>
				  <Nav bsStyle="tabs">
					<NavItem eventKey="first">Date Last Serviced</NavItem>
					<NavDropdown eventKey="3" title="Devices Serviced" id="nav-dropdown-within-tab">
					  <MenuItem eventKey="3.1">Action</MenuItem>
					  <MenuItem eventKey="3.2">Another action</MenuItem>
					  <MenuItem eventKey="3.3">Something else here</MenuItem>
					  <MenuItem divider />
					  <MenuItem eventKey="3.4">Separated link</MenuItem>
					</NavDropdown>
				  </Nav>
				</Col>
				<Col sm={12}>
				  <Tab.Content animation>
					<Tab.Pane eventKey="first"><textarea rows="5" className="text-area-notes">Tab 1 content</textarea></Tab.Pane>
					<Tab.Pane eventKey="second"><textarea rows="5" className="text-area-notes">content 2</textarea></Tab.Pane>
					<Tab.Pane eventKey="3.1"><textarea rows="5" className="text-area-notes">more content</textarea></Tab.Pane>
					<Tab.Pane eventKey="3.2"><textarea rows="5" className="text-area-notes">more stuff</textarea></Tab.Pane>
					<Tab.Pane eventKey="3.3">content</Tab.Pane>
					<Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
				  </Tab.Content>
				</Col>
			  </Row>
			</Tab.Container>
		);
	}	
}

		export { History }
