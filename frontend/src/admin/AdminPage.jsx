import React, { Component } from 'react';
import { Button, Panel, PanelGroup } from 'react-bootstrap';
import { HiddenSection } from '../HiddenSection';
import { TimeStamp } from '../TimeStamp';
import { Devices } from './Devices';
import { RoomType } from './RoomType';
import { Vendor } from './Vendor';
import { Program } from './Program';

// Import React Table
import 'react-table/react-table.css';

// Import tables
import { Department } from './Department';
import { Location } from "./Location";
import * as axios from "axios";

class AdminPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: 'null',
            campusTypes: []
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    saveRoom = (newRoom) => {
        console.log('TODO: save to db');
        console.log(newRoom);
    };

    getCampusTypes() {
        return axios.get('api/crud.php?dataset=campus');
    }

    getBuildings() {
        return axios.get('api/crud.php?dataset=building');
    }

    getRooms() {
        return axios.get('api/crud.php?dataset=room');
    }

    componentDidMount() {
        axios.all([
            this.getCampusTypes(),
            this.getBuildings(),
            this.getRooms()
        ])
        .then(axios.spread((campusTypes, buildings, rooms) => {
            this.setState({
                campusTypes: campusTypes.data.slice(),
                buildings: buildings.data.slice(),
                rooms: rooms.data.slice(),
                onNewRoom: this.saveRoom
            });
        }));
    }

  render() {
    const { data } = this.state;

      let alignCenter = {
          position: "fixed",
          fontSize: "16px",
          paddingTop: "10px"

      };

    return (
      <div>
        <PanelGroup
            accordion
            id="accordion-controlled-example"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            className="panel-width"
            style={alignCenter}
        >
            {/* All Rooms */}
            <Panel eventKey="0">
                <Panel.Heading>
                    <Panel.Title toggle>All Rooms</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <Location
                        campusTypes={this.state.campusTypes}
                        buildings={this.state.buildings}
                        rooms={this.state.rooms}
                    />
                    <HiddenSection hiddenText="..." visibleText="_">
                        <TimeStamp/>
                    </HiddenSection>
                </Panel.Body>
            </Panel>

            {/* DEPARTMENT */}
                <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>Department</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Department/>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            {/* DEVICES */}
                <Panel eventKey="5">
                    <Panel.Heading>
                        <Panel.Title toggle>Devices</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Devices/>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            {/* ROOM TYPE */}
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Room Types</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <RoomType/>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            {/* VENDOR */}
                <Panel eventKey="6">
                    <Panel.Heading>
                        <Panel.Title toggle>Vendors</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Vendor/>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            {/* PROGRAMS */}
                <Panel eventKey="7">
                    <Panel.Heading>
                        <Panel.Title toggle>Programs</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Program/>
                        <input type="text" name="programs"/>
                        <Button bsStyle="primary" bsSize="xsmall">Upload</Button>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            </PanelGroup>
      </div>
    );
  }
}

export { AdminPage }
