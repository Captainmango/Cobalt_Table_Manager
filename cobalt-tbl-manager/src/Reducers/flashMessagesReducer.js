import shortid from 'shortid';

export default function flashMessageReducer(state={}, action = {}) {
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

