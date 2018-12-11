import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class ArrayButton extends Component {


    constructor (props) {
        super(props);

        this.TODO_STATE = 0;
        this.COMPLETED_STATE = 1;
        this.ON_HOLD_STATE = 2;
        this.NEEDS_REVIEW_STATE = 3;

        this.state = {
            buttonState: this.TODO_STATE
        }

    }

    onClick = () => {
        let { buttonState  } = this.state;
        buttonState = (buttonState + 1) % 4;
        this.setState({
            buttonState
        });
    };

    render() {

        let vAlign ={
            verticalAlign: "middle",
            justifyContent: 'center'
        };

        if (this.state.buttonState === this.TODO_STATE) return <Button style={vAlign} bsStyle="danger" onClick={this.onClick}>TODO</Button>;
        else if (this.state.buttonState === this.COMPLETED_STATE) return <Button style={vAlign} bsStyle="success" onClick={this.onClick}>Completed</Button>;
        else if (this.state.buttonState === this.ON_HOLD_STATE) return <Button style={vAlign} bsStyle="info" onClick={this.onClick}>On Hold</Button>;
        else if (this.state.buttonState === this.NEEDS_REVIEW_STATE) return <Button style={vAlign} bsStyle="warning" onClick={this.onClick}>Needs Review</Button>;
        else return null;
    }
}

