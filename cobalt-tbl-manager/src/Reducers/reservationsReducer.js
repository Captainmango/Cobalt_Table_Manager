function reservationsReducer(state = {reservations: [], requesting: false }, action){
    switch (action.type){

        case "ADD_RESERVATIONS":
            return {...state,
                reservations: action.reservations,
                requesting: false
            }

        case "FETCH_RESERVATIONS":
            return {
                ...state,
                reservations: state.reservations,
                requesting: true
            }

        case "POST_RESERVATION":
            return {
                ...state,
                reservations: action.reservations,
                requesting: true
            }

        case "ADD_NEW_RESERVATIONS":
            return {...state,
                reservations: action.reservations,
                requesting: false
            }
        
        case "UPDATE_RESERVATION":
            return {                
                ...state,
                reservations: action.reservations,
                requesting: true

            }

        case "UPDATE_RESERVATION_RATING":
            return {
                ...state,
                reservations: [
                    ...state.reservations.slice(0, action.id),
                    {...state.reservations[action.id], ...action.reservation },
                    ...state.reservations.slice(action.id + 1)
                              ],
                requesting: false
            }

        default:
            return state;

    }
}

export default reservationsReducer