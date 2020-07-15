import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogInInput from '../Containers/Forms/LogInInput'
import { logOutUser } from '../Actions/userActions'; 
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



const CobaltNavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>Cobalt BM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Navbar.Brand><Link to= "/">Home</Link></Navbar.Brand>
                    <NavDropdown className="disabled" title={isLoggedIn ? `${props.user.first_name} ${props.user.last_name}` : "Dropdown"} id="basic-nav-dropdown">
                    <NavDropdown.Item disabled={!isLoggedIn}><Link to="/bookings">My Bookings</Link></NavDropdown.Item>
                    <NavDropdown.Item disabled={!isLoggedIn}><Link to="/locations">My Locations</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    {isLoggedIn ? <NavDropdown.Item href="/logout">Log out</NavDropdown.Item> : <NavDropdown.Item href="/Signup">Sign up</NavDropdown.Item>}
                </NavDropdown>

                <Nav.Item className="ml-auto">
                {isLoggedIn ? <Button onClick={() => alert("This button activated")} variant="primary">Make a Booking</Button> : <LogInInput />}
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
