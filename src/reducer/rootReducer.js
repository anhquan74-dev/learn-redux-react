import userReducer from './userReducer';
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

export default rootReducer;