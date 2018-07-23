import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class Header extends React.Component {
	render()  {
		return  (
			<header className="App-header">
				<h1 className="App-title">Classroom Support Inventory and Maintenance</h1>
					<Navbar>
			  			<Navbar.Header>
							<Navbar.Brand>
                                <Link to='/'>Home</Link>
							</Navbar.Brand>
		  				</Navbar.Header>
		  				<Nav>
							<NavItem eventKey={1} href="#">
								<Link to='/remediations'>Remediations</Link>
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
						<Nav pullRight>
						  <NavItem className="a" eventKey={1}>
							<Link to='/admin'>Admin</Link>
						  </NavItem>
						  <NavItem eventKey={2}>
							  <FormGroup>
								<FormControl type="text" placeholder="Search" />
							  </FormGroup>	
						 </NavItem>
						</Nav>
					</Navbar>
			</header>
			);
		}
	}

