import React from 'react';
import ReservationsContainer from '../Containers/ReservationsContainer'
import { connect } from 'react-redux'
import ReservationView from '../Components/ReservationView'
import { useParams } from 'react-router-dom';

const ShowReservation = (props) => {
    
    return (
        <>
          <ReservationsContainer children={<ReservationView />} />  
        </>
    )
}



export default ShowReservation
