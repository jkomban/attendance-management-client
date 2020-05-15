import { combineReducers } from 'redux'
import authReducer from './authReducer';
import studentReducer from './studentsReducer';
import schoolReducer from './schoolReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer,
    school: schoolReducer
})

export default rootReducer

