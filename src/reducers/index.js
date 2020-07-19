import { combineReducers } from 'redux';
import errorReducer from './error_reducer';
import authReducer from './authorisation';

export default combineReducers({
    auth: authReducer,
    errors:errorReducer
})