import React from 'react'
import { connect } from 'react-redux';
import Spinner from '../icons/Spinner.svg'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';

const ReservationView = (props) => {
    let { id } = useParams();
    
    



    return (
        <div>
            {
                
                props.reservations && props.reservations.length > 0 ?
                <Container>{ props.reservations.find(reservation => reservation.id === id) 
                    
                }</Container>:
                <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div><img src={Spinner} alt="spinner" /></div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => (
    {
        reservations: state.reservations.reservations
    }
)

export default connect(mapStateToProps) (ReservationView)
