import { toast } from 'react-toastify';

export const fetchMyReservations = (user_id) => {
    return (dispatch) => {
        dispatch({type: "FETCH_RESERVATIONS"});
        fetch(`http://localhost:3001/users/${user_id}/reservations`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let reservations = returnData.data;
            dispatch({ type: "ADD_RESERVATIONS", reservations: reservations})
        })

    }
}

export const postReservation = (user_id, reservation) => {
    return (dispatch) => {
        dispatch({type: "POST_RESERVATION"});
        fetch(`http://localhost:3001/users/${user_id}/reservations`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` },
            body: JSON.stringify(booking)
        })
        .then(response => response.json())
            .then(returnData => {
                let reservation = returnData.data;
                dispatch({type: "ADD_NEW_RESERVATIONS", reservations: reservation})
                toast.success("Reservation created successfully.")
        })
        
    }
   
}