import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import usersReducer from './usersReducer';
import locationsReducer from './locationsReducer';


const rootReducer = combineReducers({bookings: bookingsReducer, 
                                        locations: locationsReducer, 
                                        users: usersReducer
                                       });

export default rootReducer;