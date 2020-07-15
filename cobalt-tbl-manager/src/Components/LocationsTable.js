import React from 'react'
import { connect } from 'react-redux'
import Location from './Location'
import Table from 'react-bootstrap/Table'

const LocationsTable = (props) => {
    const locationsList = () => { 
        return props.locations.map((location, index) => <Location
        id={index} 
            name={location.name}
            owner={location.owner.first_name}
            number={location.owner.mobile_number}
            email={location.owner.email_address}/>)
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
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
        </div>
    )
}

const mapStateToProps = (state) => ({
    locations: state.locations.locations

    
})


export default connect(mapStateToProps)(LocationsTable);
