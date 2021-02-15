export const fetchPreviousLocations = (user_id) => {
    return (dispatch) => {
        dispatch({type: "FETCH_PREVIOUS_RESTAURANTS"});
        fetch(`http://localhost:3001/users/${user_id}/restaurants`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let restaurants = returnData.data;
            dispatch({type: "ADD_PREVIOUS_RESTAURANTS", restaurants: restaurants})
        })

    }
}

export const fetchAllRestautants = () => {
    return (dispatch) => {
        dispatch({type: "FETCH_ALL_RESTAURANTS"});
        fetch(`http://localhost:3001/restaurants`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` }
        })
        .then(response => response.json())
        .then(returnData => {
            let restaurants = returnData.data;
            dispatch({type: "ADD_RESTAURANTS", restaurants: restaurants })
        })

    }
}

export const deleteRestaurants = () => {
    return (dispatch) => {
      dispatch({type: "DELETE_RESTAURANTS"})
    }
  }
  