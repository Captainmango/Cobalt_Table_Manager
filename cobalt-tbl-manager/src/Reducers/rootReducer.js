import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import usersReducer from './usersReducer';
import locationsReducer from './locationsReducer';
import flashMessagesReducer from './flashMessagesReducer';

const rootReducer = combineReducers({bookings: bookingsReducer, 
                                        locations: locationsReducer, 
                                        users: usersReducer,
                                        flashMessages: flashMessagesReducer});

export default rootReducer;