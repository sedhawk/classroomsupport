import React from 'react';
import { Finder } from './finder.jsx';
//import { Instructions } from './instructions.jsx';
//import { Comments } from './comments.jsx';

class RoomManager extends React.Component {
	render(){
		return (
			<div className="App-left">
				<Finder/>
			</div>
		);
	}
}

export { RoomManager }
