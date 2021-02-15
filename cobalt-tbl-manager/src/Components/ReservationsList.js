import React from 'react'
import { connect } from 'react-redux'
import Reservation from './Reservation'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import RatingsComponent from './RatingsComponent'

const ReservationsList = (props) => {
    
    return (
        <div>
            <Container>
                <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}></Col>
      </Row>
            
            <Table size="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Restaurant name</th>
                    <th>Number of diners</th>
                    <th>Date</th>
                    <th>Like/ Dislike</th>
                    </tr>
                </thead>
                <tbody>
                    { props.bookings && props.bookings.length > 0 ? 
                        props.bookings.map((booking, index) => <Reservation
                        key={index}
                        id={index} 
                            name={booking.attributes.location.name}
                            number_of_diners={booking.attributes.number_of_diners}
                            date={new Date(booking.attributes.datetime).toString()}
                    likes={<RatingsComponent />}/>)

                    : console.log("loading")}
                </tbody>
            
            </Table>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    bookings: state.bookings.bookings,
    user: state.users.user

    
})


export default connect(mapStateToProps)(ReservationsList);