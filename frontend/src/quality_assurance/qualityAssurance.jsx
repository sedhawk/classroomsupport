import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, Tab, MenuItem, Grid, Col, Row, ProgressBar, ButtonToolbar, Label } from 'react-bootstrap';
import { Breadcrumb } from '../Breadcrumb';
import './react-bootstrap-table.css';
import './customMultiSelect.css';
import ColumnHeaderSpan from './column-header-span';
import {ArrayButton} from "./ArrayButton";

class QualityAssurance extends Component {

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

        let alignLeft = {
            textAlign: "left",
            fontSize: "16px",
            paddingTop: "10px"

        };

        let headerColor = {
            backgroundColor: "#ebebeb"
        };

        let alignRight = {
            textAlign: "right",
            paddingTop: "18px"

        };

        let cellDisplay = {
            displayInline: "block",
            paddingTop: "18px"
        };

        let colorBar = {
            borderRadius: "10px",
        };

        return (
            <div>
                <Grid style={alignLeft}>
                    <Row>
                        <Col xs={6} md={12}>
                            { buttonsInstance }
                        </Col>
                        {/*<Col xs={6} md={12}>
                            <EditSwitch
                                checked={this.state.checked}
                                className="react-switch"
                            />
                        </Col>*/}
                    </Row>
                </Grid>
                <br/>
                <div className='col-md-offset-1 col-md-8'>
                    <div className='panel panel-default'>
                        <Grid>
                            <Row  style={headerColor} className='panel panel-default'>
                                <Col style={alignLeft} xs={4} md={4}>
                                    <p className='panel-heading' >Quality Assurance</p>
                                </Col>
                                <Col style={cellDisplay} xs={3} md={3}>
                                    <ProgressBar style={colorBar}>
                                        <ProgressBar bsStyle="danger" now={35} key={1}/>
                                        <ProgressBar bsStyle="warning" now={20} key={2}/>
                                        <ProgressBar bsStyle="success" now={20} key={3}/>
                                    </ProgressBar>
                                </Col>
                                <Col style={alignRight} xs={4} md={4}>
                                    <ArrayButton/>
                                </Col>
                            </Row>
                        </Grid>

                        <div className='panel-body'>

                            <ColumnHeaderSpan />
                        </div>

                    </div>

                    <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                        <Row className="clearfix">
                            <Col sm={12}>
                                <Nav bsStyle="tabs">
                                    <NavItem eventKey="first">General Notes</NavItem>
                                    <NavDropdown eventKey="3" title="History" id="nav-dropdown-within-tab">
                                        <MenuItem eventKey="3.1">Prev Date</MenuItem>
                                        <MenuItem eventKey="3.2">Prev Date</MenuItem>
                                        <MenuItem eventKey="3.3">Date</MenuItem>
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
                                    <Tab.Pane eventKey="3.3"><textarea rows="5" className="text-area-notes">content</textarea></Tab.Pane>
                                    <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
                                </Tab.Content>
                            </Col>
                            <Col sm={12}>
                                <p>Last Modified By: (uid) Full Name</p>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <Breadcrumb/>
                </div>


            </div>

        );
    }


}

export { QualityAssurance }