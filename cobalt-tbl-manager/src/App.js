import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Routes/Home'
import Login from './Routes/Login'
import Restaurants from './Routes/Restaurants'
import Reservations from './Routes/Reservations';
import ShowReservation from './Routes/ShowReservation';
import NewReservation from './Routes/NewReservation'
import ReservationInput from './Containers/Forms/ReservationInput'
import Signup from './Routes/Signup'
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
              <Route exact path="/reservations" component={Reservations} />
              <Route exact path="/restaurants" component={Restaurants} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/logout" component={Logout} />
              <Route path="/reservations/new/id/:id/diners/:diners" component={NewReservation} />
              <Route exact path ="/reservations/:id" component={ShowReservation} />
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