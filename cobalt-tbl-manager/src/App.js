import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Routes/Home'
import Signup from './Routes/Signup'
import Restaurants from './Routes/Restaurants'
import Reservations from './Routes/Reservations';
import ShowBooking from './Routes/ShowBooking';
import { connect } from 'react-redux';
import { logOutUser } from "./Actions/userActions"
import Logout from './Routes/Logout';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



export const App = () => {
    
    return (
      
        <Router>
          <Switch>
            <>
              <NavBar/>
              
              <ToastContainer />
              <Route exact path="/" component={Home}/>
              <Route exact path="/bookings" component={Reservations} />
              <Route exact path="/locations" component={Restaurants} />
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/logout" component={Logout} />
              {/* <Route exact path="/bookings/new" component={NewBooking} /> */}
              <Route exact path ="/reservations/:id" component={ShowBooking} />
            </>
          </Switch>
        </Router>

        
    
    )
  }




const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => {dispatch(logOutUser())}
  }
}


export default connect(null, mapDispatchToProps)(App);