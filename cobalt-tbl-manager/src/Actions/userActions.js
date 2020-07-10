export const createNewUser = (data) => {
    return (dispatch) => {
      dispatch({ type: "CREATE_NEW_USER" });
      fetch('http://localhost:3001/signup', {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(returnData => {
        let user = returnData.attributes;
        dispatch({ type: 'ADD_USER', user})});
      }
    }

export const logInUser = (username, password) => {
    return (dispatch) => {
        dispatch({ type: "LOGIN_USER" });
        fetch('http://localhost:3001/login', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json' },
          body: JSON.stringify(username, password)
        })
        .then(response => response.json())
        .then(returnData => {
            let user = returnData.attributes;
            dispatch({ type: "ADD_USER", user })
        })
    }

}
