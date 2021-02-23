import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { postReservation } from '../../Actions/reservationsActions'

export const ReservationInput = (props) => {

    const {id, diners} = useParams()
    const user_id = props.user.id
    const restaurant = props.restaurants.find( restaurant => restaurant.id === id )

    // const [user_id, setUserID] = useState(props.user.id);
    const [time, setTime] = useState("");
    const [numberOfDiners, setNumberOfDiners] = useState(diners);
    console.log("we got here")

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.createReservation(user_id, {restaurant_id: restaurant.id,
                                            time,
                                            diners});
                    
        setTime("");
        setNumberOfDiners("");
    }
       
    return (
        
            <div>
               <h3>We are here</h3>
        <Container>
        <Row >
            <Form>

            <Form.Group controlId="formBasicDateTime">
                <Form.Label>Date/ Time</Form.Label>
                <Form.Control value={time} onChange={event => setTime(event.target.value)} name="datetime" type="datetime-local" />
            </Form.Group>

            <Form.Group controlId="formBasicDiners">
                <Form.Label>Diners</Form.Label>
                <Form.Control value={numberOfDiners} onChange={event => setNumberOfDiners(event.target.value)} name="number_of_diners" type="number" min="0" step="1" />
            </Form.Group>


            
            <Button variant="primary" type="submit" onClick={ event => { handleOnSubmit(event) }} >
                Submit
            </Button>
            </Form>
          </Row>
      </Container>
  </div>
        
            
        )
    }


const mapStateToProps = (state) => {
    return {
    restaurants: state.restaurants.restaurants,
    user: state.users.user,
    requesting: state.reservations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (user_id, reservation) => {dispatch(postReservation(user_id, reservation))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationInput);
