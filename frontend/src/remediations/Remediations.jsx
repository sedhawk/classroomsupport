import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, Tab, MenuItem, Grid, Col, Row, ProgressBar, PanelGroup, Panel, Button } from 'react-bootstrap';

class Remediations extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: 'null',
            isChecked: false
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render (){

        let borderLine = {
            border: "1px solid black"
        };

        let alignLeft = {
            textAlign: "left",

        };

        let alignRight = {
            textAlign: "right",

        };

        let vertCenter = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",


        };

        let cellDisplay = {
          displayInline: "block",
          verticalAlign: "middle"
        };

        let boldText = {
            fontWeight: "bold"
        };

        let checklistStyle ={
            textAlign: "left",
            fontWeight: "lighter"
        };

        return (
            <div>

                <Grid>
                    {/* Header */}
                    <Row>
                        <Col xs={12} md={12}>
                            <Grid>
                                <Row  className="show-grid">
                                    <Col style={alignLeft} xs={4} md={4}>
                                        <h5 style={boldText}>CheckList</h5>
                                    </Col>
                                    <Col style={cellDisplay} xs={3} md={3}>
                                        <h5 style={boldText}>Progress</h5>
                                    </Col>
                                    <Col style={alignRight} xs={5} md={5}>
                                        <h5 style={boldText}>Job State</h5>
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>

                    {/* Checklist */}
                    <Row>
                        <Grid>
                            <Col xs={12} md={12}>
                                <Row  className="show-grid">
                                    <Col xs={12} md={12}>
                                        <PanelGroup
                                            accordion
                                            id="accordion-controlled-example"
                                            activeKey={this.state.activeKey}
                                            onSelect={this.handleSelect}
                                        >

                                            {/* Initial Planning Stage */}
                                            <Panel eventKey="1">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Initial Planning Stage</p>
                                                                </Col>
                                                                <Col style={cellDisplay} xs={3} md={3}>
                                                                    <div>
                                                                        <ProgressBar>
                                                                            <ProgressBar bsStyle="danger" now={35} key={1}/>
                                                                            <ProgressBar active bsStyle="warning" now={20} key={2}/>
                                                                            <ProgressBar striped bsStyle="success" now={10} key={3}/>
                                                                        </ProgressBar>
                                                                    </div>
                                                                </Col>
                                                                <Col style={alignRight} xs={5} md={5}>
                                                                    <Button>TODO</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </Panel.Title>
                                                </Panel.Heading>

                                                <Row>
                                                    <Panel.Body collapsible>
                                                        <form style={checklistStyle}>
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="classroomNeeds"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
&nbsp;Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
&nbsp;Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
&nbsp;Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
&nbsp;Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
&nbsp;During walk through add a comment below noting any specific installation expectations such as how cabling should be run
                                                            </label>
                                                            <br />
                                                        </form>
                                                        <br />
                                                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <Nav bsStyle="tabs">
                                                                        <NavItem eventKey="first">Planning Notes</NavItem>
                                                                        <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
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
                                                    </Panel.Body>
                                                </Row>
                                            </Panel>

                                            {/* Pre-Installation Checklist */}
                                            <Panel eventKey="2">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Pre-Installation Checklist</p>
                                                                </Col>
                                                                <Col style={cellDisplay} xs={3} md={3}>
                                                                    <div>
                                                                        <ProgressBar>
                                                                            <ProgressBar bsStyle="danger" now={35} key={1}/>
                                                                            <ProgressBar bsStyle="warning" now={20} key={2}/>
                                                                            <ProgressBar bsStyle="success" now={10} key={3}/>
                                                                        </ProgressBar>
                                                                    </div>
                                                                </Col>
                                                                <Col style={alignRight} xs={5} md={5}>
                                                                    <Button>TODO</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </Panel.Title>
                                                </Panel.Heading>

                                                <Row>
                                                    <Panel.Body collapsible>
                                                        <form style={checklistStyle}>
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="classroomNeeds"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;During walk through add a comment below noting any specific installation expectations such as how cabling should be run
                                                            </label>
                                                            <br />
                                                        </form>
                                                        <br />
                                                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <Nav bsStyle="tabs">
                                                                        <NavItem eventKey="first">Planning Notes</NavItem>
                                                                        <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
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
                                                    </Panel.Body>
                                                </Row>
                                            </Panel>

                                            {/* Installation Stage*/}
                                            <Panel eventKey="3">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Pre-Installation Checklist</p>
                                                                </Col>
                                                                <Col style={cellDisplay} xs={3} md={3}>
                                                                    <div>
                                                                        <ProgressBar>
                                                                            <ProgressBar striped bsStyle="danger" now={35} key={1}/>
                                                                            <ProgressBar bsStyle="warning" now={20} key={2}/>
                                                                            <ProgressBar active bsStyle="success" now={10} key={3}/>
                                                                        </ProgressBar>
                                                                    </div>
                                                                </Col>
                                                                <Col style={alignRight} xs={5} md={5}>
                                                                    <Button>TODO</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </Panel.Title>
                                                </Panel.Heading>

                                                <Row>
                                                    <Panel.Body collapsible>
                                                        <form style={checklistStyle}>
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="classroomNeeds"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;During walk through add a comment below noting any specific installation expectations such as how cabling should be run
                                                            </label>
                                                            <br />
                                                        </form>
                                                        <br />
                                                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <Nav bsStyle="tabs">
                                                                        <NavItem eventKey="first">Planning Notes</NavItem>
                                                                        <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
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
                                                    </Panel.Body>
                                                </Row>
                                            </Panel>

                                            {/* Lectern Operational Checklist */}
                                            <Panel eventKey="4">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Lectern Operational Checklist</p>
                                                                </Col>
                                                                <Col style={cellDisplay} xs={3} md={3}>
                                                                    <div>
                                                                        <ProgressBar>
                                                                            <ProgressBar striped bsStyle="danger" now={35} key={1}/>
                                                                            <ProgressBar bsStyle="warning" now={20} key={2}/>
                                                                            <ProgressBar active bsStyle="success" now={10} key={3}/>
                                                                        </ProgressBar>
                                                                    </div>
                                                                </Col>
                                                                <Col style={alignRight} xs={5} md={5}>
                                                                    <Button>TODO</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </Panel.Title>
                                                </Panel.Heading>

                                                <Row>
                                                    <Panel.Body collapsible>
                                                        <form style={checklistStyle}>
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="classroomNeeds"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;During walk through add a comment below noting any specific installation expectations such as how cabling should be run
                                                            </label>
                                                            <br />
                                                        </form>
                                                        <br />
                                                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <Nav bsStyle="tabs">
                                                                        <NavItem eventKey="first">Planning Notes</NavItem>
                                                                        <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
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
                                                    </Panel.Body>
                                                </Row>
                                            </Panel>

                                            {/* Completion Sign Off */}
                                            <Panel eventKey="5">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Pre-Installation Checklist</p>
                                                                </Col>
                                                                <Col style={cellDisplay} xs={3} md={3}>
                                                                    <div>
                                                                        <ProgressBar>
                                                                            <ProgressBar striped bsStyle="danger" now={35} key={1}/>
                                                                            <ProgressBar bsStyle="warning" now={20} key={2}/>
                                                                            <ProgressBar active bsStyle="success" now={10} key={3}/>
                                                                        </ProgressBar>
                                                                    </div>
                                                                </Col>
                                                                <Col style={alignRight} xs={5} md={5}>
                                                                    <Button>TODO</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </Panel.Title>
                                                </Panel.Heading>

                                                <Row>
                                                    <Panel.Body collapsible>
                                                        <form style={checklistStyle}>
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="classroomNeeds"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;During walk through add a comment below noting any specific installation expectations such as how cabling should be run
                                                            </label>
                                                            <br />
                                                        </form>
                                                        <br />
                                                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <Nav bsStyle="tabs">
                                                                        <NavItem eventKey="first">Planning Notes</NavItem>
                                                                        <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
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
                                                    </Panel.Body>
                                                </Row>
                                            </Panel>

                                            {/* Faculty Training Checklist */}
                                            <Panel eventKey="6">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Faculty Training Checklist</p>
                                                                </Col>
                                                                <Col style={cellDisplay} xs={3} md={3}>
                                                                    <div>
                                                                        <ProgressBar>
                                                                            <ProgressBar striped bsStyle="danger" now={35} key={1}/>
                                                                            <ProgressBar bsStyle="warning" now={20} key={2}/>
                                                                            <ProgressBar active bsStyle="success" now={10} key={3}/>
                                                                        </ProgressBar>
                                                                    </div>
                                                                </Col>
                                                                <Col style={alignRight} xs={5} md={5}>
                                                                    <Button>TODO</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </Panel.Title>
                                                </Panel.Heading>

                                                <Row>
                                                    <Panel.Body collapsible>
                                                        <form style={checklistStyle}>
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="classroomNeeds"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;During walk through add a comment below noting any specific installation expectations such as how cabling should be run
                                                            </label>
                                                            <br />
                                                        </form>
                                                        <br />
                                                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <Nav bsStyle="tabs">
                                                                        <NavItem eventKey="first">Planning Notes</NavItem>
                                                                        <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
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
                                                    </Panel.Body>
                                                </Row>
                                            </Panel>
                                        </PanelGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Grid>
                    </Row>

                </Grid>

            </div>
        );

    }

}

export { Remediations }