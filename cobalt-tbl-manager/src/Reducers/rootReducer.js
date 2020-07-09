import { combineReducers } from 'redux';
import { bookingsReducer, locationsReducer, tablesReducer, usersReducer } from '../Reducers'

const rootReducer = combineReducers(bookingsReducer, tablesReducer, locationsReducer, usersReducer);

export default rootReducer;