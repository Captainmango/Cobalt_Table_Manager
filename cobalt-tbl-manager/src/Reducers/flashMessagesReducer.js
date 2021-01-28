import shortid from 'shortid';

export default function flashMessagesReducer(state={}, action = {}) {
    switch (action.type){
        case ADD_FLASH_MESSAGE:
            return {
                ...state,
                    title: action.flash.title,
                    message: action.flash.message,
                    alertType: action.flash.alertType
                };
            
        default: return state
    }

}

