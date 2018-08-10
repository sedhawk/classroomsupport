/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const checkList = [];

function addList(task) {
  const startId = checkList.length;
  let check_list  = [ 'Clean projector filters ',
                      'Power on all devices',
                      'Reset filter hours',
                      'Check signal/operation from doc cam',
                      'Check signal/operation from DVD/BluRay',
                      'Check signal/operation from wireless streaming (Airmedia, AppleTV)',
                      'Check signal/operation from computer',
                      'Check network signal and login for computer',
                      'Test AUX inputs',
                      'Test ALL device audio',
                      'Test microphones and audio level',
                      'Clean computer display',
                      'Clean lectern surface',
                      'Clean keyboard, mouse, touch panel',
                      'Clean wall mounted TV screens if in reach',
                      'Wipe down/clean inside of lectern',
                      'Power off lectern',
                      'Make note of lectern computer specifications'];

  for (let i = 0; i < task; i++) {
    const id = startId + i;
    checkList.push({
      id: id,
      task: check_list[i],
      notes: ""
    });
  }
}

addList(18);

export default class ColumnHeaderSpan extends React.Component {
  render() {
      const selectRow = {
          mode: 'checkbox',
          bgColor: 'rgb(238, 193, 213)'
      };

      const cellEdit = {
          mode: 'click',
          blurToSave: true
      };

    return (
      <BootstrapTable data={ checkList }
                      selectRow={ selectRow }
                      cellEdit={ cellEdit }
                      insertRow deleteRow exportCSV>
          <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey hidden autoValue>ID</TableHeaderColumn>
        <TableHeaderColumn headerAlign='center' row='0' colSpan='2' >Pre-semester classroom check list</TableHeaderColumn>
        <TableHeaderColumn headerAlign='center' row='1' dataField='task'>Task</TableHeaderColumn>
        <TableHeaderColumn headerAlign='center' row='1' dataField='notes'>Task Notes</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
