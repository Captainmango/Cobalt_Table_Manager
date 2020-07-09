import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import usersReducer from './usersReducer';
import locationsReducer from './locationsReducer';
import tablesReducer from './tablesReducer';

const rootReducer = combineReducers({bookings: bookingsReducer, 
                                        tables: tablesReducer, 
                                        locations: locationsReducer, 
                                        users: usersReducer});

export default rootReducer;