import { combineReducers } from 'redux'
import authReducer, { initalAuthState } from './authReducer';
import studentReducer, { initialStudentsState } from './studentsReducer';
import { schoolReducer, initialSchoolState } from './schoolReducer';
import { facilityReducer, initialFacilityState } from './facilityReducer';
import { notiReducer, initialNotificationState } from './notiReducer';
import { batchReducer, initialBatchState } from './batchReducer';

export {
    initialSchoolState, initialStudentsState, initialFacilityState, initalAuthState, initialNotificationState,
    initialBatchState
};

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer,
    school: schoolReducer,
    facilities: facilityReducer,
    notifications: notiReducer,
    batches: batchReducer
})


export default rootReducer

