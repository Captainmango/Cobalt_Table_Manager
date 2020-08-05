import React from 'react'

const Booking = (props) => {
    return (
    <tr>
        <td>{props.name}</td> 
        <td>{props.number_of_diners}</td>
        <td>{props.date}</td>
    </tr>
    )
}

export default Booking;