function locationsReducer(state = {locations: [], myLocations: [], requesting: false }, action){
    switch (action.type){

        case "ADD_LOCATIONS":
            return {...state,
                locations: action.locations,
                myLocations: [],
                requesting: false
            }

        case "ADD_MY_LOCATIONS":
            return {...state,
                locations: [],
                myLocations: [action.myLocations],
                requesting: false
            }

        case "FETCH_MY_LOCATIONS":
            return {
                ...state,
                locations: [],
                myLocations: state.locations,
                requesting: true
            }

        case "FETCH_ALL_LOCATIONS":
            return {
                ...state,
                locations: state.locations,
                myLocations: [],
                requesting: true
            }

        case "DELETE_LOCATIONS":
            return {
                ...state,
                locations: [],
                requesting: false
            }

        default:
            return state;

    }
}

export default locationsReducer