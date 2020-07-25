import { combineReducers } from 'redux';
import errorReducer from './error_reducer';
import authReducer from './authorisation';
import propReducer from './propReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    property:propReducer
})