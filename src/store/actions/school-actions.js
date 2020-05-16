import { getSchoolDetails } from '../../services';
const SCHOOL_ACTIONS = {
    'RETRIEVE_SCHOOLS': 'RETRIEVE_SCHOOLS',
    'ADD_SCHOOLS': 'ADD_SCHOOLS',
    'UPDATE_SCHOOLS': 'UPDATE_SCHOOLS',
    'DELETE_SCHOOLS': 'DELETE_SCHOOLS'
}

const getSchoolDetail = () => {
    return async (dispatch) => {
        try {
            const data = await getSchoolDetails()
            // console.log("RESULT OBTAINED : ")
            // console.log(data)
            dispatch({ type: SCHOOL_ACTIONS.RETRIEVE_SCHOOLS, data: data })
        } catch (e) {
            console.error(e);
            console.error("school-actions.getSchoolDetails():: ERROR");
            // dispatch({ type: SCHOOL_ACTIONS.RETRIEVE_SCHOOLS, schools: data })
        }

    }
}

export { SCHOOL_ACTIONS, getSchoolDetail }