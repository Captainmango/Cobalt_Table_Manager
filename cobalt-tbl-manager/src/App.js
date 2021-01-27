import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Routes/Home'
import Signup from './Routes/Signup'
import Locations from './Routes/Locations'
import NewBooking from './Routes/NewBooking';
import Bookings from './Routes/Bookings';
import { connect } from 'react-redux';
import { logOutUser } from "./Actions/userActions"
import Logout from './Routes/Logout';
import Bus from './utils/Bus';
import Flash from './Components/Flash';

window.flash = (message, title, type="success") => Bus.emit('flash', ({message, title, type}));

export class App extends React.Component {
  
  render() {
    
    return (
      
      
        <Router>
          <Switch>
            <>
            <button onClick={ (event) => {event.preventDefault(); window.flash("test", "test", "primary")}}>me </button>
              <NavBar/>
              <Flash />
              <Route exact path="/" component={Home}/>
              <Route exact path="/bookings" component={Bookings} />
              <Route exact path="/locations" component={Locations} />
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/bookings/new" component={NewBooking} />
            </>
          </Switch>
        </Router>

        
    
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => {dispatch(logOutUser())}
  }
}


export default connect(null, mapDispatchToProps)(App);