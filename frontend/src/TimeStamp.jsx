import React, { Component } from 'react';
import  { Grid, Row, Col, Button } from 'react-bootstrap';

class TimeStamp extends Component {

	render() {
		
		return (
			<div>
				<Grid>
					<Row className="App-left">
						<Col xs="2" sm="3">
							<p>Last modified by </p>
							<p>(userid) full name</p>
						</Col>
						<Col xs="2" sm="3">
							<button type="button" class="btn btn-default btn-sm">
								<span class="glyphicon glyphicon-calendar"></span> Calendar
							</button>
							<br/>
							<Button bsStyle="primary" bsSize="xsmall">Revert</Button>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export { TimeStamp }
