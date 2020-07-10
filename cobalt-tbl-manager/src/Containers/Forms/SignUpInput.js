import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {createNewUser} from '../../Actions/userActions'


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
          [event.target.name]: event.target.value
        });
      }

    handleOnSubmit(event) {
        event.preventDefault();
        //this.props.createUser(this.state);
        //console.log(this.props)
        // this.setState({
        //     username: "",
        //     password: "",
        //     first_name: "",
        //     last_name: "",
        //     mobile_number: "",
        //     email_address: ""
        // });
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
                        <Form.Control value={this.state.email_address} onChange={event => this.handleOnChange(event)} name="email_address" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={this.state.username} onChange={event => this.handleOnChange(event)} name="username" type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={event => this.handleOnChange(event)} name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control value={this.state.first_name} onChange={event => this.handleOnChange(event)} name="first_name" type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control value={this.state.last_name} onChange={event => this.handleOnChange(event)} name="last_name" type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMobile">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control value={this.state.mobile_number} onChange={event => this.handleOnChange(event)} name="mobile_number" type="tel" placeholder="Mobile number" pattern="+44[0-9]{4}[0-9]{3}[0-9]{3}" />
                        <Form.Text className="text-muted">
                        The same goes for your number. Please make sure to include your dial code.
                        </Form.Text>
                    </Form.Group>                    
                    
                    <Button variant="primary" type="submit" onClick={this.handleOnSubmit}>
                        Submit
                    </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: () => dispatch(createNewUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpInput)
