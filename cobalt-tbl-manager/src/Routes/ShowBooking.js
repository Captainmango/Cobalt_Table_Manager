import React from 'react';
import { useParams } from 'react-router-dom';

const ShowBooking = () => {

    let { id } = useParams();
    // TODO: use IF statements and filter to get the reservation we want to show. 
    // May also need to write an action to get this from the API
    
    return (
        <div>
            
        </div>
    )
}

export default ShowBooking
