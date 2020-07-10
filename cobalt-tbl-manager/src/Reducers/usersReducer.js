function usersReducer(user = [{isLoggedIn: 1}], action){
    switch (action.type){

        default:
            return user;

    }
}

export default usersReducer;