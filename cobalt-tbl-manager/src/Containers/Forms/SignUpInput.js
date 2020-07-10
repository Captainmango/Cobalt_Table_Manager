import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SignUpInput extends Component {
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
