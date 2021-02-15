export const fetchMyLocations = (user_id) => {
    return (dispatch) => {
        dispatch({type: "FETCH_MY_LOCATIONS"});
        fetch(`http://localhost:3001/users/${user_id}/locations`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let locations = returnData.data;
            dispatch({type: "ADD_MY_LOCATIONS", myLocations: locations})
        })

    }
}

export const fetchAllLocations = () => {
    return (dispatch) => {
        dispatch({type: "FETCH_ALL_LOCATIONS"});
        fetch(`http://localhost:3001/locations`, {
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

export const deleteLocations = () => {
    return (dispatch) => {
      dispatch({type: "DELETE_LOCATIONS"})
    }
  }
  