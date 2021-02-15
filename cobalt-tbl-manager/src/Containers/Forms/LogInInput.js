import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { logInUser } from '../../Actions/userActions';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';



const LogInInput = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.logIn({username, password});
        toast.success("Logged in successfully", {
            position: "top-center",
            hideProgressBar: true,
            closeOnClick: true
        })
        setUsername("");
        setPassword("");
    }

        return (
            <>
                <Form inline>
                    <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value = {username}
                        onChange={ (event) => setUsername(event.target.value) }
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="username"
                    />
                    
                    <FormControl
                        value = {password}
                        onChange={ (event) => setPassword(event.target.value) }
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        name="password"
                    />
                    <Button onClick={ (event) => { handleOnSubmit(event); } } variant="btn btn-outline-secondary">Log in</Button>
                    </InputGroup>
                    </Form>
            </>
        )
    }




const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => dispatch(logInUser(user)),
    }
}
export default connect(null, mapDispatchToProps)(LogInInput)
