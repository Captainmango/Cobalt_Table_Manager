import React from 'react';
import { connect } from 'react-redux';
import { fetchMyBookings } from '../Actions/bookingsActions';
import BookingsTable from '../Components/BookingsTable';
import Spinner from '../Spinner.svg'

export class LocationsContainer extends React.Component {

    componentDidMount() {
        let user_id = this.props.user.id
        this.props.fetchMyBookings(user_id)
      }
      


      handleLoading = () => {
        if(this.props.requesting) {
          return <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div><img src={Spinner} alt="spinner" /></div>
            </div>
          </>
        } else {
          return <BookingsTable />
        }
      }
    render() {
        return (
          
            <div>
                <h1>My Bookings</h1>
                <br />
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    bookings: state.bookings.bookings,
    user: state.users.user,
    requesting: state.bookings.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchMyBookings: (user_id) => {dispatch(fetchMyBookings(user_id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer);