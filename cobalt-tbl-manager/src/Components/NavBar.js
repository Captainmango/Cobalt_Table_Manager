import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogInInput from '../Containers/Forms/LogInInput'
import { logOutUser } from '../Actions/userActions'; 
import { NavLink } from 'react-router-dom';
import gem from '../gem.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



const CobaltNavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand><img src={gem} alt="gem-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Navbar.Brand><NavLink to= "/">Home</NavLink></Navbar.Brand>
                    <NavDropdown disabled={!isLoggedIn} title={isLoggedIn ? `${props.user.first_name} ${props.user.last_name}` : "Dropdown"} id="basic-nav-dropdown">
                    <NavLink to="/bookings">My Bookings</NavLink> <br />
                    <NavLink to="/locations" >My Locations</NavLink> <br />
                    <NavLink to="/bookings/new" >Make A Booking</NavLink>                     
                </NavDropdown>
                {isLoggedIn ? <NavLink to="/logout">Log out</NavLink> : <NavLink to="/Signup">Sign up</NavLink>}

                <Nav.Item className="ml-auto">
                {isLoggedIn ? <NavLink to="/bookings/new">Make a Booking</NavLink> : <LogInInput />}
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

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logOutUser())}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CobaltNavBar);
