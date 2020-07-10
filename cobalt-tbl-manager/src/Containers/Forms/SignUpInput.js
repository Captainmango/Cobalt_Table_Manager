import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class SignUpInput extends Component {

    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        mobile_number: "",
        email_address: ""
    }

    handleOnChange(event) {
        this.setState({
          name: event.target.value,
        });
      }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.addUser(this.state);
        this.props.createUser(this.state);
        this.setState({
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            mobile_number: "",
            email_address: ""
        });
    }

    render() {
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
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMobile">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="tel" placeholder="Mobile number" pattern="[0-9]{5}-[0-9]{3}-[0-9]{3}" />
                    </Form.Group>                    
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users[0]
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpInput)
