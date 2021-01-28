import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { logInUser } from '../../Actions/userActions';
import Button from 'react-bootstrap/Button';
import { addFlashMessage } from '../../Actions/flashMessageActions';


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
        this.props.logIn(this.state);
        this.props.addFlashMessage("Success","You've been signed in","success");
        this.setState({
            username: "",
            password: ""
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
                        value = {this.state.username}
                        onChange={this.handleOnChange.bind(this)}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="username"
                    />
                    
                    <FormControl
                        value = {this.state.password}
                        onChange={this.handleOnChange.bind(this)}
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        name="password"
                    />
                    <Button onClick={this.handleOnSubmit.bind(this)} variant="btn btn-outline-secondary">Log in</Button>
                    </InputGroup>
                    </Form>
            </>
        )
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => dispatch(logInUser(user)),
        addFlashMessage: (title, message, alertType) => dispatch(addFlashMessage(title, message, alertType))
    }
}
export default connect(null, mapDispatchToProps)(LogInInput)
