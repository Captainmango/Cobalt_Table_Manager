import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { logOutUser } from '../Actions/userActions'

export const Logout = (props) => {
    const isLoggedIn = props.isLoggedIn
    debugger
    return (
        <>
        {isLoggedIn ? "" : <Button onClick={props.logout()}>Log out</Button>}
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isloggedIn: state.users.isLoggedIn
    }
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logOutUser())}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
