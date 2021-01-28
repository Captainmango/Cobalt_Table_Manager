import shortid from 'shortid';

function flashMessagesReducer(state=[], action = {}) {
    switch (action.type){
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {   
                    id: shortid.generate(),
                    title: action.flash.title,
                    message: action.flash.message,
                    alertType: action.flash.alertType
                }
            ]
        default: return state
    }

}