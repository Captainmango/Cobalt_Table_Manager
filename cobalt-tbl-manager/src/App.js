import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Routes/Home'
import Signup from './Routes/Signup'
import Locations from './Routes/Locations'

export class App extends React.Component {
  render() {
    return (
      <Router>
      <Switch>
        <>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bookings" render={()=> <h2><b>This is a test for the bookings route</b></h2>} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/logout" component={Home} />
        </>
      </Switch>
      </Router>
    )
  }
}


export default App;