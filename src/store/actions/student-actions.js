import { getAllStudentDetails, updateStudentDetails, deleteStudentDetails } from '../../services';

const STUDENT_ACTIONS = {
    'RETRIEVE_STUDENTS': 'RETRIEVE_STUDENTS',
    'ADD_STUDENTS': 'ADD_STUDENTS',
    'UPDATE_STUDENTS': 'UPDATE_STUDENTS',
    'DELETE_STUDENTS': 'DELETE_STUDENTS'
}


const getAllStudents = ({ pageSize, index }) => {

    return async (dispatch, getState) => {
        let state = getState()
        console.log(`student-actions() - currentState [JSON.stringify(${state})]`)

        try {
            const data = await getAllStudentDetails({ pageSize, index })
            console.log(`student-actions() - success [${JSON.stringify(data)}]`)
            console.log(data)
            dispatch({ type: STUDENT_ACTIONS.RETRIEVE_STUDENTS, students: data })

        } catch (err) {
            dispatch({ type: STUDENT_ACTIONS.RETRIEVE_STUDENTS, data: [] })
            console.error(`student-actions() - success [JSON.stringify(${err})]`)
        }

    };
}


export {
    STUDENT_ACTIONS,
    getAllStudents
}

