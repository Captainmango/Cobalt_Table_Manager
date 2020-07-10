function usersReducer(state = {user: {}, isLoggedIn: false, requesting: false}, action){
    switch (action.type){

        case "ADD_USER":
            return{
                ...state,
                user: action.user,
                requesting: false,
                isLoggedIn: true
            }

        case "CREATE_NEW_USER":
            return {
                ...state,
                user: [...state.user],
                isLoggedIn: false,
                requesting: true
            }

        case "LOGIN_USER":
            return {
                ...state,
                user: [...state.user],
                isLoggedIn: false,
                requesting: true
            }

        case "LOGOUT_USER":
            return {
                ...state,
                user: [],
                isLoggedIn: false,
                requesting: false
            }

        default:
            return state;

    }
}

export default usersReducer;