import { combineReducers } from 'redux'
import authReducer from './authReducer';
import studentReducer from './studentsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer
})

export default rootReducer

