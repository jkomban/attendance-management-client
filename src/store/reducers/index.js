import { combineReducers } from 'redux'
import authReducer, { initalAuthState } from './authReducer';
import studentReducer, { initialStudentsState } from './studentsReducer';
import { schoolReducer, initialSchoolState } from './schoolReducer';
import { facilityReducer, initialFacilityState } from './facilityReducer';
import { notiReducer, initialNotificationState } from './notiReducer';

export { initialSchoolState, initialStudentsState, initialFacilityState, initalAuthState, initialNotificationState };

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer,
    school: schoolReducer,
    facilities: facilityReducer,
    notifications: notiReducer
})


export default rootReducer

