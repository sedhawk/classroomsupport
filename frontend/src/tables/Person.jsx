import React, { Component } from "react";
import { makeData, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Person extends Component {
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
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "First Name",
              accessor: "firstName",
              Cell: this.renderEditable
            },
			{
				Header: "Email",
				accessor: "email",
				Cell: this.renderEditable
			},
			{
				Header: "Phone",
				accessor: "phone",
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

export { Person }
