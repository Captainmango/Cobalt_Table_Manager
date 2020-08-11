import React from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../Actions/userActions'
import { Redirect } from 'react-router-dom'

export class Logout extends React.Component {

  componentWillMount() {
    this.handleLogout()
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
      return (
    <Redirect to="/" />
      )
  }
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
