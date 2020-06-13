import { getAllGrades, addGrade as _addGrade, updateGrade as _updateGrade } from '../../services';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const GRADE_ACTIONS = {
    'RETRIEVE_ALL_GRADES': 'RETRIEVE_ALL_GRADES',
    'ADD_GRADE': 'ADD_GRADE',
    'UPDATE_GRADE': 'UPDATE_GRADE'
}

const getAllGradeDetails = (schoolID) => {
    return async (dispatch) => {
        try {
            const data = await getAllGrades(schoolID)
            dispatch({ type: GRADE_ACTIONS.RETRIEVE_ALL_GRADES, data: data })
        } catch (e) {
            console.error(e);
            console.error("grade-actions.getAllFacilityDetail():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in fetching grade info', content: e.response } })
        }
    }
}

const addGrade = (gradeDetails, schoolID) => {
    return async (dispatch) => {
        try {
            const data = await _addGrade(gradeDetails, schoolID)
            dispatch({ type: GRADE_ACTIONS.ADD_GRADE, data: data })
        } catch (e) {
            console.error(e);
            console.error("grade-actions.addGrade():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in adding grade info', content: e.response } })
        }
    }
}


const updateGrade = (gradeDetails, schoolID) => {
    return async (dispatch) => {
        try {
            const data = await _updateGrade(gradeDetails, schoolID)
            dispatch({ type: GRADE_ACTIONS.UPDATE_GRADE, data: data })
        } catch (e) {
            console.error(e);
            console.error("grade-actions.updateGrade():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in updating grade info', content: e.response } })
        }
    }
}
export { GRADE_ACTIONS, getAllGradeDetails, addGrade, updateGrade }