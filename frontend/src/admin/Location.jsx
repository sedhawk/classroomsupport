/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint space-infix-ops: 0 */
/* eslint max-len: 0 */

import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const campus = [];

function addCampus(type) {
    const startId = campus.length;

    let campus_type = [ 'North',
                        'South',
                        'Extended',
                        'Other'
    ];

    for (let i = 0; i < type; i++) {
        const id = startId + i;
        campus.push({
            id: id,
            name: campus_type[i],
            building: "",
            room: ""
        });
    }
}

addCampus(4);

function onRowSelect(row, isSelected) {
    console.log(row);
    console.log(`selected: ${isSelected}`);
}

function onSelectAll(isSelected) {
    console.log(`is select all: ${isSelected}`);
}

function onAfterSaveCell(row, cellName, cellValue) {
    console.log(`Save cell ${cellName} with value ${cellValue}`);
    console.log('The whole row :');
    console.log(row);
}

function onAfterTableComplete() {
    console.log('Table render complete.');
}

function onAfterDeleteRow(rowKeys) {
    console.log('onAfterDeleteRow');
    console.log(rowKeys);
}

function onAfterInsertRow(row) {
    console.log('onAfterInsertRow');
    console.log(row);
}

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: [], // default select on table
    bgColor: 'rgb(238, 193, 213)',
    onSelect: onRowSelect,
    onSelectAll: onSelectAll
};

const cellEditProp = {
    mode: 'click',
    blurToSave: true
};

// validator function pass the user input value and should return true|false.
function jobNameValidator(value) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
        response.isValid = false;
        response.notification.type = 'error';
        response.notification.msg = 'Value must be inserted';
        response.notification.title = 'Requested Value';
    } else if (value.length < 1) {
        response.isValid = false;
        response.notification.type = 'error';
        response.notification.msg = 'Must have valid characters';
        response.notification.title = 'Invalid Value';
    }
    return response;
}


class Location extends Component {

    invalidJobStatus = (cell, row) => {
        console.log(`${cell} at row id: ${row.id} fails on editing`);
        return 'invalid-jobstatus-class';
    }

    editingJobStatus = (cell, row) => {
        console.log(`${cell} at row id: ${row.id} in current editing`);
        return 'editing-jobstatus-class';
    }

    render() {
        return (
            <BootstrapTable data={ campus }
                            selectRow={ selectRowProp }
                            cellEdit={ cellEditProp }
                            insertRow
                            deleteRow
                            hover
            >
                <TableHeaderColumn dataField='id' isKey hidden autoValue>ID</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center'
                                   dataField='name'
                                   editable={ { type: 'textarea', validator: jobNameValidator } }
                                   editColumnClassName='editing-jobsname-class'
                                   invalidEditColumnClassName='invalid-jobsname-class'>
                    Campus Type
                </TableHeaderColumn>
                <TableHeaderColumn dataAlign='center'
                                   dataField='building'
                                   editable={ { type: 'textarea', validator: jobNameValidator } }
                                   editColumnClassName='editing-jobsname-class'
                                   invalidEditColumnClassName='invalid-jobsname-class'>
                    Building
                </TableHeaderColumn>
                <TableHeaderColumn dataAlign='center'
                                   dataField='room'
                                   editable={ { type: 'textarea', validator: jobNameValidator } }
                                   editColumnClassName='editing-jobsname-class'
                                   invalidEditColumnClassName='invalid-jobsname-class'>
                    Room
                </TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export { Location}