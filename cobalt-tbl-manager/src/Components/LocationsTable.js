import React, { Component } from 'react'
import { connect } from 'react-redux'

export const LocationsTable = () => {
    locationsList = () => { 
        return props.locations.map((location, index) => <Location
        id={index} 
            name={reservation.name}
            owner={reservation.owner.first_name}
            number={reservation.owner.mobile_number}
            email={reservation.owner.email_address}/>)
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


export default connect(mapStateToProps)(LocationsTable)
