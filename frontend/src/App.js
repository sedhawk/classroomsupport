import React, {Component} from 'react';
import {Header} from './header.jsx';

import {RoomManager} from './roommanager.jsx';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {AdminPage} from "./admin/AdminPage";
import {Remediations} from "./remediations/Remediations";
import {QualityAssurance} from "./quality_assurance/QualityAssurance";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={ RoomManager }/>
                    <Route exact path='/quality_assurance' component={ QualityAssurance }/>
                    <Route exact path='/admin' component={ AdminPage }/>
                    <Route exact path='/remediations' component={ Remediations }/>
                </Switch>
            </div>
        );
    }
}


export default App;
