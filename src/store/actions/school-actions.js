import { getSchoolDetails, updateSchoolDetails } from '../../services';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const SCHOOL_ACTIONS = {
    'RETRIEVE_SCHOOLS': 'RETRIEVE_SCHOOLS',
    'ADD_SCHOOLS': 'ADD_SCHOOLS',
    'UPDATE_SCHOOLS': 'UPDATE_SCHOOLS',
    'DELETE_SCHOOLS': 'DELETE_SCHOOLS',
    'EDIT_INFO': 'EDIT_INFO'
}

const getSchoolDetail = () => {
    return async (dispatch) => {
        try {

            const data = await getSchoolDetails()
            dispatch({ type: SCHOOL_ACTIONS.RETRIEVE_SCHOOLS, data: data })
        } catch (e) {
            console.log(e.response);
            console.log("school-actions.getSchoolDetails():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in fetching school info', content: e.response } })
        }
    }
}

const updateSchoolDetail = (data) => {
    return async (dispatch) => {
        try {
            await updateSchoolDetails(data)
            // console.log("RESULT OBTAINED : ")
            // console.log(data)
            dispatch({ type: SCHOOL_ACTIONS.UPDATE_SCHOOLS })
        } catch (e) {
            console.error(e);
            console.error("school-actions.getSchoolDetails():: ERROR");
        }
    }
}

const updateEditInfo = (data) => {
    return async (dispatch) => {
        dispatch({ type: SCHOOL_ACTIONS.EDIT_INFO, data: data })
    }
}

export { SCHOOL_ACTIONS, getSchoolDetail, updateSchoolDetail, updateEditInfo }