import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Reservation = (props) => {
    return (
        <Row className="mb-3 mt-3 justify-content-lg-center bg-light">
            <Col>
                <div style={{display: 'flex', justifyContent: 'center' }}>
                    <div>    
                        <img src={props.img} alt="restaurant"></img>
                    </div>
                </div>
            </Col>
            <Col lg={{ span: 5}} className="align-self-center">
                <div><h5>{props.name}</h5></div>
                <div><h5>{props.address}</h5></div>
            </Col>

            <Col lg={{ span: 2}} className="align-self-center">
                <div><h5> {props.diners} Diners  </h5></div>
            </Col>

            <Col lg={{span: 3}} className="align-self-center">
                {props.rating}
            </Col>
        </Row>
    )
}

export default Reservation;