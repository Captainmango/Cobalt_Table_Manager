function bookingsReducer(state = {bookings: [], requesting: false }, action){
    switch (action.type){

        case "ADD_BOOKINGS":
            return {...state,
                bookings: [...action.bookings],
                requesting: false
            }

        case "FETCH_BOOKINGS":
            return {
                ...state,
                bookings: [...state.bookings],
                requesting: true
            }

        case "POST_BOOKING":
            return {
                ...state,
                bookings: action.booking,
                requesting: true
            }

        case "ADD_NU_BOOKINGS":
            return {...state,
                bookings: action.bookings,
                requesting: false
            }

        default:
            return state;

    }
}

export default bookingsReducer