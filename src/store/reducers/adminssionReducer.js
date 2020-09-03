import { ADMISSION_ACTIONS } from '../actions/admission-actions'

export const initialAdmissionState = []

export const admissionReducer = (state = initialAdmissionState, action) => {

    switch (action.type) {
        case ADMISSION_ACTIONS.RETRIEVE_ALL_ADMISSIONS:
            return action.data
        case ADMISSION_ACTIONS.APPLY_ADMISSION:
        case ADMISSION_ACTIONS.UPDATE_ADMISSION:
            console.log("----- Admission update/add reducer-----")
            return state
        default:
            return state;
    }
}
