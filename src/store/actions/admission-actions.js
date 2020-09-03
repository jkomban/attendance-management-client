import { getAllApplications as _getAllApplications } from '../../services';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const ADMISSION_ACTIONS = {
    'RETRIEVE_ALL_ADMISSIONS': 'RETRIEVE_ALL_ADMISSIONS',
    'APPLY_ADMISSION': 'APPLY_ADMISSION',
    'UPDATE_ADMISSION': 'UPDATE_ADMISSION',
}

const getAllApplications = (schoolID) => {
    return async (dispatch) => {
        try {
            const data = await _getAllApplications(schoolID)
            dispatch({ type: ADMISSION_ACTIONS.RETRIEVE_ALL_ADMISSIONS, data: data })
        } catch (e) {
            console.error(e);
            console.error("admission-actions.getAllApplications():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in fetching admission info', content: e.response } })
        }
    }
}

export { ADMISSION_ACTIONS, getAllApplications }