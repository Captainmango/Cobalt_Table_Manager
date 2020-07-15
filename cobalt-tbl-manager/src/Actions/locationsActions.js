export const fetchLocations = (user_id) => {
    return (dispatch) => {
        dispatch({type: "FETCH_LOCATIONS"});
        fetch(`http://localhost:3001/users/${user_id}/locations`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let locations = returnData.data;
            dispatch({type: "ADD_LOCATIONS", locations: locations})
        })

    }
}