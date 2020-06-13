import { combineReducers } from 'redux'
import authReducer, { initalAuthState } from './authReducer';
import studentReducer, { initialStudentsState } from './studentsReducer';
import { schoolReducer, initialSchoolState } from './schoolReducer';
import { facilityReducer, initialFacilityState } from './facilityReducer';
import { notiReducer, initialNotificationState } from './notiReducer';
import { batchReducer, initialBatchState } from './batchReducer';
import { gradeReducer, initialGradeState } from './gradeReducer';

export {
    initialSchoolState, initialStudentsState, initialFacilityState, initalAuthState, initialNotificationState,
    initialBatchState, initialGradeState
};

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer,
    school: schoolReducer,
    facilities: facilityReducer,
    notifications: notiReducer,
    batches: batchReducer,
    grades: gradeReducer
})


export default rootReducer

