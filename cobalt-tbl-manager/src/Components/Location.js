import React from 'react'

export const Location = (props) => {
    return (
    <tr>
        <td>{props.name}</td> 
        <td>{props.owner}</td>
        <td>{props.number}</td>
        <td>{props.email}</td>
    </tr>
    )
}
