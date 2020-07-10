import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" render={() => <h1 className="text-center"><b>This is a test for client side routing</b></h1> }/>
          <Route exact path="/bookings" render={()=> <h2><b>This is a test for the bookings route</b></h2>} />
          <Route exact path="/locations/:locationId/bookings" render={() => <h1>This is the locations booking route</h1>} />
          <Route exact path="/bookings/:bookingId" render={() => <h1>This will be the bookings show page</h1>} />
          <Route exact path="/locations" render={() => <h1>This will show all the locations to book at or the owner's locations</h1>} />
          <Route exact path="/locations/:locationId" render={() => <h1> This will be the locations show page</h1>}/>
        </div>
      </Router>
    )
  }
}


export default App;