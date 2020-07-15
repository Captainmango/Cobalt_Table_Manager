import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogInInput from '../Containers/Forms/LogInInput'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



const CobaltNavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">Cobalt BM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title={isLoggedIn ? `${props.user.first_name} ${props.user.last_name}` : "Dropdown"} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/bookings">My Bookings</NavDropdown.Item>
                    <NavDropdown.Item href="/locations">My Locations</NavDropdown.Item>
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



export default connect(mapStateToProps)(CobaltNavBar);
