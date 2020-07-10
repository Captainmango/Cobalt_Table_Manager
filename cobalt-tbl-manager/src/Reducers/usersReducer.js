function usersReducer(user = [{isLoggedIn: false}], action){
    switch (action.type){

        default:
            return user;

    }
}

export default usersReducer;