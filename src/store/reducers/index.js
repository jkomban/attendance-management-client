import { combineReducers } from 'redux'
import authReducer, { initalAuthState } from './authReducer';
import studentReducer, { initialStudentsState } from './studentsReducer';
import { schoolReducer, initialSchoolState } from './schoolReducer';
import { facilityReducer, initialFacilityState } from './facilityReducer';

export { initialSchoolState, initialStudentsState, initialFacilityState, initalAuthState };

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer,
    school: schoolReducer,
    facilities: facilityReducer
})


export default rootReducer

