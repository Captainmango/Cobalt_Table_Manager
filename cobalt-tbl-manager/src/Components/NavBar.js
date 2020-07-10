import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



const CobaltNavBar = (props) => {
    return(
        <>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">Cobalt BM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/bookings">My Bookings</NavDropdown.Item>
                    <NavDropdown.Item href="/locations">My Locations</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {props.user.isLoggedIn === true ? <NavDropdown.Item href="/logout">Log out</NavDropdown.Item> : <NavDropdown.Item href="/Signup">Sign up</NavDropdown.Item>}
                </NavDropdown>

                </Nav>
                <Button onClick={() => alert("This button activated")} variant="primary">Make a Booking</Button>
                    <Form inline>
                    <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="username"
                    />
                    
                    <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        name="password"
                    />
                    <Button variant="btn btn-outline-secondary">Log in</Button>
                    </InputGroup>
                    </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        user: state.users[0]
    }
}

export default connect(mapStateToProps)(CobaltNavBar);
