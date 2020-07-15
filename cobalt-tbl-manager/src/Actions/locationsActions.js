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
            dispatch({type: "ADD_LOCATIONS", locations: returnData.data})
        })

    }
}