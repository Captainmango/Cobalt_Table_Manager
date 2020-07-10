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
      .then(data => {
        let user = data.attributes;
        dispatch({ type: 'ADD_USER', user})});
      }
    }
