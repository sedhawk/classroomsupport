import React, { Component } from 'react';
import { Header } from './header.jsx';
import { ReportForm } from './reportform.jsx';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() { 
    return ( 
      <div className="App">
	  	<Header/>
		<ReportForm/>
      </div>
     );
   }
} 

export default App;
