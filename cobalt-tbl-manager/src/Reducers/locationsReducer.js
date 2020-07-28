function locationsReducer(state = {locations: [], requesting: false }, action){
    switch (action.type){

        case "ADD_LOCATIONS":
            return {...state,
                locations: [action.locations],
                requesting: false
            }

        case "FETCH_MY_LOCATIONS":
            return {
                ...state,
                locations: [...state.locations],
                requesting: true
            }

        case "FETCH_ALL_LOCATIONS":
            return {
                ...state,
                locations: [...state.locations],
                requesting: true
            }

        default:
            return state;

    }
}

export default locationsReducer