import React, { Component } from "react";
import { makeData, Tips } from "../tables/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Program extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Program Name",
              accessor: "programName",
              Cell: this.renderEditable
            },
			{
				Header: "Version Number",
				accessor: "versionNumber",
				Cell: this.renderEditable
			}
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export { Program }
