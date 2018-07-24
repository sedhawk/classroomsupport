import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, Tab, MenuItem, Grid, Col, Row, ProgressBar, PanelGroup, Panel, Button } from 'react-bootstrap';
import { RoomSelector} from "./RoomSelector";

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

                <RoomSelector/>
                <hr/>

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
                                                                &nbsp;
                                                                Consult with Deans Office staff to verify the classroom needs: in most cases this will be identical to what's currently in the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Consult with Deans Office staff to schedule an installation time
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Contact an installation vendor (Troxell) to schedule a walk through of the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Complete walk through with vendor to verify installation needs and time frame
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                During walk through add a comment below noting any specific installation expectations such as how cabling should be run
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
                                                                &nbsp;
                                                                Exchange contact information with installers- cell phone and office line
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Explain parking and give the parking code as described in the Service-Now KB article titled "Vendor Parking"
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Coordinate building/room access as needed
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Meet in the room with all installers to review any specific installation expectations noted in the Planning Stage and note those below
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ask if installers have any questions for us
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ensure installers have everything they need to continue quickly and efficiently
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                At any point during these steps check in with the Deans Office staff so they are aware the installation is beginning and are able to ask any questions. Add any pertinent questions or contact information in a comment below.
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Complete DNS Registrations for the Touch Panel, DMPS, and AM-100 MAC addresses as outlined in KB article "New Lectern Equipment DHCP Leases"
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
                                                                    <p>Installation Stage</p>
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
                                                                &nbsp;
                                                                Ensure the MAC addresses are registered: no further action required
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ensure installers have adequate access to the room
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Follow up with installers several times/day to ensure work is progressing as planned
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Follow through with any specific installation expectations outlined in the "Initial Planning Stage"
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Installers often play music, sometimes loudly. If other classes and/or events are taking place nearby please communicate with installers so no disruptions are made.
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ensure cables are managed well within the lectern
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ensure there are no hanging or exposed cables near the lectern or at ceiling height, particularly the screen control wires
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Whenever possible avoid the use of any wire-mold
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                            <input
                                                                name="addNotes"
                                                                type="checkbox"
                                                                checked={this.state.isGoing}
                                                                onChange={this.handleInputChange.bind(this)} />
                                                            &nbsp;
                                                                Coordinate transfer of usable existing equipment/furniture back to Classroom Support, and contact Surplus to pick up the rest
                                                        </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ensure the installers provide a spreadsheet with all equipment MAC addresses and serial numbers- once provided add this information to the correct sub folder under the "Classroom Remediations" folder in the shared drive
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Update Classroom Inventories in \itsshares\itss-classrooms\classroom inventories with equipment information from previous step, any changes to computer, and renovation time line
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                If new computer is being deployed, wipe existing computer, delete AD and DNS entries, prepare old computer for cycling, image new computer with fresh AD and DNS entries, and deliver new computer to integrator
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Send an email to Nate.See@nau.edu with the building, room number, processor IP, and touch panel IP so devices can be added appropriately to the ToolBox address book
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
                                                                &nbsp;
                                                                The projector image fills the screen, and does not overshoot
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;Projector(s) are set to "High Altitude" mode
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Any additional equipment such as a microphone(s) have been tested, and are operational as expected
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                None of the equipment is damaged in any identifiable way (ex: broken HDMI housing on a Doc Cam)
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                PC audio/video drivers are updated, and sound can be heard when a YouTube video is played. Update the correct playback device in Windows to read something like "Crestron Room Speakers"
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                The lectern raises and lowers via respective buttons
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Lectern keys work as expected
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Lectern equipment (PC, Mouse, Keyboard, Monitor, and Doc Cam) are locked down via the standard lock cable
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

                                            {/* Program Operational Checklist */}
                                            <Panel eventKey="5">
                                                <Panel.Heading>
                                                    <Panel.Title toggle>
                                                        <Grid>
                                                            <Row className="show-grid">
                                                                <Col style={alignLeft} xs={4} md={4}>
                                                                    <p>Program Operational Checklist</p>
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
                                                                &nbsp;
                                                                Display Tools button is available, and projectors/TV's turn on/off when lectern is off
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Power On?
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Doc Cam, Laptop HDMI, USB C, MiniDP, Instructor PC, AirMedia, Display Selects, and Display Tools buttons are available
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Doc Cam buttons operate: Power on/off, Focus, Zoom, Lights, Freeze, and Micro
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Laptop HDMI, USB-C, and MiniDP work with audio - use laptop to test. Test the auto switching functionality between aux cables.
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Instructor PC works with audio- may require a display driver update
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Instructor PC is set to extend desktop and Display Switch GUI is loaded (see KB0012657)
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Ensure Extended Desktop function works on the PC
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                AirMedia works, and has the appropriately assigned 10.5 IP address
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Mute button works when audio is playing
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Presenter Volume can be lowered/raised by sliding the bar
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Presenter Volume can be lowered/raised via the - and + buttons
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Open DM Tools in ToolBox. Play a loud YouTube video on the PC. Set PC volume, video volume, and touch panel volume to max. Raise the Digital Audio Out in DM Tools until just before the speakers start to clip. Save the settings
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Display Selects shows the following sources for each connected Projector and/or TV: Doc Cam, Laptop HDMI, USB-C, MiniDP, Instructor PC, AirMedia, Extended Desktop
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Extended Desktop shows the extended desktop on each corresponding display
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Toggle through each projector and/or TV source to verify the display changes to each source appropriately
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Display Tools is available and allows displays to power on/off while the lectern is powered on. Test projector screen control (on panel and on wall)
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Depending on the specific classroom there may be additional options such as "Mics". If applicable, verify the microphones are working, and volume can be adjusted appropriately
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Power Off? The "Yes, Continue" and "No, Cancel" buttons work appropriately
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
                                                                    <p>Completion Sign Off</p>
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
                                                                &nbsp;
                                                                The physical installation is 100% complete
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                All trash is cleaned up, remaining boxes are removed, and overall the room is cleaner than before the installation began
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                The "Lectern Operational Checklist" (Section D) has been completed, and the lectern and program are 100% functional
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                NAU electricians have finished running power to the screen(s) and projector where applicable
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Lingering Facilities issues have been coordinated
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
                                                                &nbsp;
                                                                Contact Bonita Switala (Bonita.Switala@nau.edu or 523-1751) who is in charge of 25Live to get a list of who will be teaching in the class during the next semester. Attach the list here, or add the names in a comment below. In the email include a list of the new equipment and features so she can update 25Live appropriately
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="roomAvailability"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Coordinate with the college's Admin Office concerning anyone else who may like training or an introduction to the new technology. Add any other names and contact information in a comment below
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="scheduleWalkThrough"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Coordinate 1-3 training session times with the college's Admin Office
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="verifySpecs"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                Once training dates/times are established email everyone below notifying them of the training sessions: training will be an open lab type session, or can be one-on-one if a Faculty member is unable to make the given training
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                In training cover all functionality left to right, top to bottom
                                                            </label>
                                                            <br />
                                                            <label style={checklistStyle}>
                                                                <input
                                                                    name="addNotes"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange.bind(this)} />
                                                                &nbsp;
                                                                During training pay particular attention to troubleshoot issues including the Document Camera HDMI connection, Extended Desktop functionality, and powering on the PC
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