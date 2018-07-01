import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export class Header extends React.Component {
	render()  {
		return  (
			<header className="App-header">
				<h1 className="App-title">Classroom Support Inventory and Maintenance</h1>
					<Navbar>
			  			<Navbar.Header>
							<Navbar.Brand>
			  					<a href="#home">Home</a>
							</Navbar.Brand>
		  				</Navbar.Header>
		  				<Nav>
							<NavItem eventKey={1} href="#">
			  					Remediations
							</NavItem>
							<NavItem eventKey={2} href="#">
			  					Messages
							</NavItem>
							<NavDropdown eventKey={3} title="Account Settings" id="basic-nav-dropdown">
							  <MenuItem eventKey={3.1}>Action</MenuItem>
							  <MenuItem eventKey={3.2}>Another action</MenuItem>
							  <MenuItem eventKey={3.3}>Something else here</MenuItem>
							  <MenuItem divider />
							  <MenuItem eventKey={3.4}>Separated link</MenuItem>
							</NavDropdown>
							
	  					</Nav>
					</Navbar>	
			</header>
			)
		}
	}

