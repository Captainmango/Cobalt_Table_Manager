import React from 'react'
import { connect } from 'react-redux'
import Reservation from './Reservation'
import Container from 'react-bootstrap/Container'
import RatingsComponent from './RatingsComponent'
import Spinner from '../icons/Spinner.svg'

const resTest = [
    { name: "test",
    diners: "4",
    time: "22/02/2022",
    img: "test",
    address: "test" },
    { name: "test",
    diners: "4",
    time: "22/02/2022",
    img: "test",
    address: "test" },
    { name: "test",
    diners: "4",
    time: "22/02/2022",
    img: "test",
    address: "test" },

]

const ReservationsList = (props) => {
    
    return (
        <div>

            <Container className="p-3">

                { resTest && resTest.length > 0 ? 
                        resTest.map((reservation, index) => <Reservation
                            key={index}
                            id={index}
                            img={reservation.img} 
                            name={reservation.name}
                            address={reservation.address}
                            diners={reservation.diners}
                            time={new Date(reservation.time).toString()}
                            rating={<RatingsComponent rating={0} />}/>)

                    : <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div><img src={Spinner} alt="spinner" /></div>
                    </div>}
                
            
            </Container>
    
        </div>
    )
}

const mapStateToProps = (state) => ({
    reservations: state.reservations.reservations,
    user: state.users.user

    
})


export default connect(mapStateToProps)(ReservationsList);