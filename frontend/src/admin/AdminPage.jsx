import React, { Component } from 'react';
import { Button, Panel, PanelGroup } from 'react-bootstrap';
import { HiddenSection } from '../HiddenSection';
import { TimeStamp } from '../TimeStamp';
import { Devices } from './Devices';
import { RoomType } from './RoomType';
import { Vendor } from './Vendor';
import { Program } from './Program';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Import tables
import { Department } from './Department';

class AdminPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: 'null',
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

  render() {
    const { data } = this.state;
    return (
      <div>
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
                        <Department/>
                        <select>
                            <option>DeptName</option>
                        </select>
                        <Button bsStyle="primary" bsSize="xsmall">+</Button>
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
                        <select><option>DeptName</option></select>
                        <Button bsStyle="primary" bsSize="xsmall">+</Button>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            {/* ROOM TYPE */}
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Room Type</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <RoomType/>
                        <select>
                            <option>collaboration lab</option>
                        </select>
                        <Button bsStyle="primary" bsSize="xsmall">+</Button>
                        <HiddenSection hiddenText="..." visibleText="_">
                            <TimeStamp/>
                        </HiddenSection>
                    </Panel.Body>
                </Panel>

            {/* VENDOR */}
                <Panel eventKey="6">
                    <Panel.Heading>
                        <Panel.Title toggle>Vendor</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Vendor/>
                        <select>
                            <option>Troxel</option><option>CCS</option>
                            <option>In House</option>
                        </select>
                        <Button bsStyle="primary" bsSize="xsmall">+</Button>
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
