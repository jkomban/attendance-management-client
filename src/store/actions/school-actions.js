import { getSchoolDetails, updateSchoolDetails } from '../../services';
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

const updateSchoolDetail = (data) => {
    console.log(data)
    return async (dispatch) => {
        console.log(2)
        try {
            // const response = await updateSchoolDetails(data)
            // console.log("RESULT OBTAINED : ")
            // console.log(data)
            const newData= {...data}
            dispatch({ type: SCHOOL_ACTIONS.UPDATE_SCHOOLS, data: newData })
        } catch (e) {
            console.error(e);
            console.error("school-actions.getSchoolDetails():: ERROR");
            // dispatch({ type: SCHOOL_ACTIONS.RETRIEVE_SCHOOLS, schools: data })
        }
    }
}

export { SCHOOL_ACTIONS, getSchoolDetail, updateSchoolDetail }