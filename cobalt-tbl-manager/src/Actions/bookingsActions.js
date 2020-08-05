export const fetchMyBookings = (user_id) => {
    return (dispatch) => {
        dispatch({type: "FETCH_BOOKINGS"});
        fetch(`http://localhost:3001/users/${user_id}/bookings`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let bookings = returnData.data;
            dispatch({type: "ADD_BOOKINGS", bookings: bookings})
        })

    }
}

export const postBooking = (user_id, booking) => {
    return (dispatch) => {
        dispatch({type: "POST_BOOKING"});
        fetch(`http://localhost:3001/users/${user_id}/bookings`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` },
            body: JSON.stringify(booking)
        })
        .then(response => response.json())
            .then(returnData => {
                let booking = returnData.data;
                dispatch({type: "ADD_NU_BOOKINGS", bookings: booking})
                alert("Booking created successfully");
        })
    }
}