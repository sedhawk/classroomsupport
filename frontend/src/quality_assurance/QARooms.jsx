import React, { Component } from 'react';
import { Grid, Col, Row, MenuItem, ButtonGroup, DropdownButton } from 'react-bootstrap';

class RoomSelector extends Component {

    render(){

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

        let btn = {
            height:"30px",
            padding:'0px',
            verticalAlign: 'center'
        }

        let topMargin = {
            paddingTop: "25px"
        };

        return (

            <div>

                <Grid style={topMargin}>
                    <Row>
                        <Col xs={7} md={7}>
                            <Row>
                                <Col style={alignLeft} xs={4} md={4}>
                                    <ButtonGroup vertical>
                                        <DropdownButton className="btn" title="Campus Type" id="bg-vertical-dropdown-1">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                        <DropdownButton className="btn" title="Building" id="bg-vertical-dropdown-2">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                        <DropdownButton className="btn" title="Room" id="bg-vertical-dropdown-3">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </Col>
                                <Col style={alignLeft} xs={4} md={4}>
                                    <ButtonGroup vertical>
                                        <DropdownButton className="btn" title="Supervisor" id="bg-vertical-dropdown-1">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                        <DropdownButton className="btn" title="Collaborators" id="bg-vertical-dropdown-2">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </Col>
                                <Col style={alignLeft} xs={4} md={4}>
                                    <ButtonGroup vertical>
                                        <DropdownButton className="btn" title="Vendors" id="bg-vertical-dropdown-1">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export { RoomSelector }