import React from 'react'

const Restaurant = (props) => {
    return (
    <tr>
        <td>{props.name}</td> 
        <td>{props.owner}</td>
        <td>{props.number}</td>
        <td>{props.email}</td>
    </tr>
    )
}

export default Restaurant;