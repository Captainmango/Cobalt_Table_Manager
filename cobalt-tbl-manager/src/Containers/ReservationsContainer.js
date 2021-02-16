import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMyReservations } from '../Actions/reservationsActions';
import Spinner from '../icons/Spinner.svg';
import BookingsTable from '../Components/ReservationsList';

export const ReservationsContainer = (props) => {

    
    useEffect((props) => {
      props.fetchMyReservations()

    }, [])
      


    const handleLoading = (props) => {
        if(props.requesting) {
          return <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div><img src={Spinner} alt="spinner" /></div>
            </div>
          </>
        } else {
          return <BookingsTable />
        }
      }

        return (
          
            <div>
                <h1>My Bookings</h1>
                <br />
                { handleLoading() }
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
    bookings: state.reservations.reservations,
    user: state.users.user,
    requesting: state.reservations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchMyReservations: (user_id) => {dispatch(fetchMyReservations(user_id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer);