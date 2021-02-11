function restaurantsReducer(state = {restaurants: [], requesting: false }, action){
    switch (action.type){

        case "ADD_RESTAURANTS":
            return {...state,
                restaurants: action.restaurants,
                requesting: false
            }

        case "ADD_MY_RESTAURANTS":
            return {...state,
                restaurants: [],
                requesting: false
            }

        // case "FETCH_MY_RESTAURANTS":
        //     return {
        //         ...state,
        //         restaurants: [],
        //         myLocations: state.restaurants,
        //         requesting: true
        //     }

        case "FETCH_ALL_RESTAURANTS":
            return {
                ...state,
                restaurants: state.restaurants,
                myLocations: [],
                requesting: true
            }

        case "DELETE_RESTAURANTS":
            return {
                ...state,
                restaurants: [],
                requesting: false
            }

        default:
            return state;

    }
}

export default restaurantsReducer