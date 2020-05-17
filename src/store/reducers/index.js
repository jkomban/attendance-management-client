import { combineReducers } from 'redux'
import authReducer from './authReducer';
import studentReducer, { initialStudentsState } from './studentsReducer';
import { schoolReducer, initialSchoolState } from './schoolReducer';

export { initialSchoolState, initialStudentsState };

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer,
    school: schoolReducer
})


export default rootReducer

