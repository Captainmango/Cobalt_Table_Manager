import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createNewUser } from '../../Actions/userActions'


const SignUpInput = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [mobile_number, setMobileNumber] = useState("")
    const [email_address, setEmailAddress] = useState("")

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.createUser({username, 
                          password, 
                          first_name, 
                          last_name, 
                          mobile_number, 
                          email_address});
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setEmailAddress("");
    }

        return (
            <div>
                <Container>
                <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}><h1 className="text-center">Sign up Form</h1></Col>
      </Row>
      <br/>
      <br/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email_address} onChange={event => setEmailAddress(event.target.value)} name="email_address" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} onChange={event => setUsername(event.target.value)} name="username" type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={event => setPassword(event.target.value)} name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control value={first_name} onChange={event => setFirstName(event.target.value)} name="first_name" type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control value={last_name} onChange={event => setLastName(event.target.value)} name="last_name" type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMobile">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control value={mobile_number} onChange={event => setMobileNumber(event.target.value)} name="mobile_number" type="tel" placeholder="Mobile number" />
                        <Form.Text className="text-muted">
                        The same goes for your number. Please make sure to include your dial code.
                        </Form.Text>
                    </Form.Group>               
                    
                    <Button variant="primary" type="submit" onClick={event => handleOnSubmit(event)}>
                        Submit
                    </Button>
                    </Form>
                </Container>
            </div>
        )
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUpInput)
