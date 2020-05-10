import { STUDENT_ACTIONS } from '../actions/student-actions'

const initialStudentsState = []

export default (state = initialStudentsState, action) => {
    // console.log(`StudentsReducer() - state[${JSON.stringify(state)}] action[${JSON.stringify(action)}]`)
    switch (action.type) {
        case STUDENT_ACTIONS.RETRIEVE_STUDENTS:
            console.log(state)
            console.log(action)
            return action.students

        case STUDENT_ACTIONS.DELETE_STUDENTS:
            console.log(state)
            console.log(action.students)
            if (action.students instanceof Error) {
                return state
            } else {
                return action.students
            }


        default:
            console.log(`studentReducer() - default`)
            return state;
    }
}