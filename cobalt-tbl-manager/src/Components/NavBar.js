import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogInInput from '../Containers/Forms/LogInInput'
import { NavLink } from 'react-router-dom';
import logo from '../icons/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



const CobaltNavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center">
                <Navbar.Brand><NavLink to= "/"><img src={logo} alt="cobalt-logo" /> Home</NavLink></Navbar.Brand>
                    <NavDropdown disabled={!isLoggedIn} title={isLoggedIn ? `${props.user.first_name} ${props.user.last_name}` : "Dropdown"} id="basic-nav-dropdown">
                    <NavLink to="/bookings">My Bookings</NavLink> <br />
                    <NavLink to="/locations" >My Locations</NavLink> <br />
                    <NavLink to="/bookings/new" >Make A Booking</NavLink>                     
                </NavDropdown>
                {isLoggedIn ? <NavLink className="ml-3 align-self-center" to="/logout">Log out</NavLink> : <NavLink className="ml-3" to="/Signup">Sign up</NavLink>}

                <Nav.Item className="ml-3">
                {isLoggedIn ? <NavLink className="ml-3" to="/bookings/new">Make a Booking</NavLink> : <LogInInput className="ml-3" />}
                </Nav.Item>
                
                </Nav>      
            </Navbar.Collapse>
        </Navbar>
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        isLoggedIn: state.users.isLoggedIn
    }
}




export default connect(mapStateToProps)(CobaltNavBar);
