// export const logOutUser = () => {
//     return (dispatch) => {
//       dispatch({type: "LOGOUT_USER"})
//       alert("Logged out successfully.")
//     }
//   }

export const addFlashMessage = (title, message, alertType) => {
    return {
        type: ADD_FLASH_MESSAGE,
        title: title,
        message: message,
        alertType: alertType
    }
}