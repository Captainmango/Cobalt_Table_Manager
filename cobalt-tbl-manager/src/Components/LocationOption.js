import React from 'react'

export const LocationOption = (props) => {
    return (
        <option value={props.id}>
            {props.name}
        </option>
    )
}
