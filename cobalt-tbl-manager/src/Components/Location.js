import React from 'react'

const Location = (props) => {
    return (
    <tr>
        <td>{props.name}</td> 
        <td>{props.owner}</td>
        <td>{props.number}</td>
        <td>{props.email}</td>
    </tr>
    )
}

export default Location;