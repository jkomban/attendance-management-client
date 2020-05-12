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
        console.log(`student-actions() - currentState [${JSON.stringify(state)}]`)

        try {
            const data = await getAllStudentDetails({ pageSize, index })
            console.log(`student-actions() - success [${JSON.stringify(data)}]`)
            console.log(data)
            dispatch({ type: STUDENT_ACTIONS.RETRIEVE_STUDENTS, students: data })

        } catch (err) {
            console.error(`student-actions() - FAILURE [JSON.stringify(${err})]`)
            // dispatch({ type: STUDENT_ACTIONS.RETRIEVE_STUDENTS, stuents: [] })
            /** TODO
             * 1. Handle error in generic way
             * */
        }

    };
}

const deleteStudentById = (Student) => {
    return async (dispatch, getState) => {
        const state = getState()
        console.log(`currentState [${JSON.stringify(state)}]`)

        try {
            const data = await deleteStudentDetails(Student);
            console.log(`SUCCESS: [${JSON.stringify(data)}]`)
            dispatch({ type: STUDENT_ACTIONS.DELETE_STUDENTS, students: data })

        } catch (err) {
            console.error(`FAILURE: [${JSON.stringify(err)}]`)
            console.log(err)
            // dispatch({ type: STUDENT_ACTIONS.DELETE_STUDENTS, students: [] })
            /** TODO
             * 1. Handle error in generic way
             * */

        }
    }
}


export {
    STUDENT_ACTIONS,
    getAllStudents,
    deleteStudentById
}

