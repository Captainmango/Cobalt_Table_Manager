import React, { Component } from 'react'
import { connect } from 'react-redux'

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
