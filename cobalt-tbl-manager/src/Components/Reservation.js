import React from 'react'

const Reservation = (props) => {
    return (
    <tr>
        <td>{props.name}</td> 
        <td>{props.number_of_diners}</td>
        <td>{props.date}</td>
        <td>{props.likes}</td>
    </tr>
    )
}

export default Reservation;