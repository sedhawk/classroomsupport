import React  from 'react';
import { Label } from 'react-bootstrap';
import Switch from "react-switch";

class EditSwitch extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
	  return (
      <div className="example">
	  	<Label htmlFor="normal-switch">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            id="normal-switch"
          />
		 </Label>
        <p>Edit mode is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
      </div>
    );
	  
  }
}

export { EditSwitch }
