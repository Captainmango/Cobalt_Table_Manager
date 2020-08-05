import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Routes/Home'
import Signup from './Routes/Signup'
import Locations from './Routes/Locations'
import NewBooking from './Routes/NewBooking';
import Bookings from './Routes/Bookings';

export class App extends React.Component {
  render() {
    return (
      <Router>
      <Switch>
        <>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/logout" component={Home} />
          <Route exact path="/bookings/new" component={NewBooking} />
        </>
      </Switch>
      </Router>
    )
  }
}


export default App;