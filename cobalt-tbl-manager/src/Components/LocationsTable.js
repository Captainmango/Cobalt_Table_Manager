import React from 'react'
import { connect } from 'react-redux'
import Location from './Location'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const LocationsTable = (props) => {
    const locationsList = () => { 
        return props.locations.map((location, index) => <Location
        id={index} 
            name={location.attributes.name}
            owner={location.attributes.owners[0].first_name}
            number={location.attributes.owners[0].mobile_number}
            email={location.attributes.owners[0].email_address}/>)
    }

    return (
        <div>
            <Container>
                <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}><h1 className="text-center"></h1></Col>
      </Row>
            
            <Table size="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Restaurant name</th>
                    <th>Owner name</th>
                    <th>Contact number</th>
                    <th>Email address</th>
                    </tr>
                </thead>
                <tbody>
                    {locationsList()}
                </tbody>
            
            </Table>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    locations: state.locations.locations

    
})


export default connect(mapStateToProps)(LocationsTable);
