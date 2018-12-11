/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint space-infix-ops: 0 */
/* eslint max-len: 0 */

import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const dept = [];

function addDept(name) {
    const startId = dept.length;

    let department = [ 'CEFNS',
        'English',
        'Music',
        'Extended Campuses'
    ];

    for (let i = 0; i < name; i++) {
        const id = startId + i;
        dept.push({
            id: id,
            college: department[i],
            deptName: ""
        });
    }
}

addDept(4);

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
function valid(value) {
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


class Department extends Component {
    render() {
        return (
            <BootstrapTable data={ dept }
                            selectRow={ selectRowProp }
                            cellEdit={ cellEditProp }
                            insertRow
                            deleteRow
                            hover
            >
                <TableHeaderColumn dataField='id'
                                   dataAlign='center'
                                   dataSort isKey hidden autoValue>ID</TableHeaderColumn>

                <TableHeaderColumn dataField='college'
                                   dataAlign='center'
                                   dataSort
                                   editable={ {
                                       type: 'textarea',
                                       validator: valid } }>
                    College
                </TableHeaderColumn>
                <TableHeaderColumn dataField='deptName'
                                   dataSort
                                   editable={ {
                                       type: 'textarea',

                                       validator: valid } }>
                    Department Name
                </TableHeaderColumn>

            </BootstrapTable>
        );
    }
}

export { Department }