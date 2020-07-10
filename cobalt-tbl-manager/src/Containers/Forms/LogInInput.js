import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { logInUser } from '../../Actions/userActions';
import Button from 'react-bootstrap/Button'


class LogInInput extends Component {

    state = {
        username: "",
        password: ""
    }

    handleOnChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleOnSubmit(event) {
        event.preventDefault();
        this.props.logInUser(this.state);
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
            <>
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
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (username, password) => dispatch(logInUser(username, password))
    }
}
export default connect(null, mapDispatchToProps)(LogInInput)
