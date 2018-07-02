import React, { Component } from 'react';
import { Header } from './header.jsx';
import { ReportForm } from './reportform.jsx';
import { RoomManager } from './roommanager.jsx';
import './App.css';


class App extends Component {
  render() { 
    return ( 
      <div className="App">
	  	<Header/>
		<ReportForm/>
		<RoomManager/>
      </div>
      );
    }
 } 


export default App;
