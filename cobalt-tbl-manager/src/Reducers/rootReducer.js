import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import usersReducer from './usersReducer';
import locationsReducer from './locationsReducer';
import flashMessageReducer from './flashMessagesReducer';

const rootReducer = combineReducers({bookings: bookingsReducer, 
                                        locations: locationsReducer, 
                                        users: usersReducer,
                                        flashMessage: flashMessageReducer});

export default rootReducer;