import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';


export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <h1><b>This is a test for client side routing</b></h1> }/>
          <Route exact path="/bookings" render={()=> <h2><b>This is a test for the bookings route</b></h2>} />
        </div>
      </Router>
    )
  }
}


export default App;