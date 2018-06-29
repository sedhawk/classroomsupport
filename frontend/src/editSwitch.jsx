import React  from 'react';
import { Label } from 'react-bootstrap';
import Switch from "react-switch";

class editSwitch extends React.Component {
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
        <label htmlFor="normal-switch">
          <span>Switch with default style</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            id="normal-switch"
          />
        </label>
        <p>Edit mode is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
      </div>
    );
  }
}

export { editSwitch }
