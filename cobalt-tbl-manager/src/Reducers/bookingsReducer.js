function bookingsReducer(state = {bookings: [], requesting: false }, action){
    switch (action.type){

        case "ADD_BOOKINGS":
            return {...state,
                bookings: [action.bookings],
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
                booking: [action.booking],
                requesting: true
            }

        default:
            return state;

    }
}

export default bookingsReducer