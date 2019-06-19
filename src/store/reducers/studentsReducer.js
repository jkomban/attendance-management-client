import { STUDENT_ACTIONS } from '../actions/student-actions'

const initialStudentsState = []

export default (state = initialStudentsState, action) => {
    console.log(`StudentsReducer() - ${JSON.stringify(action)}`)
    switch (action.type) {
        case STUDENT_ACTIONS.RETRIEVE_STUDENTS:
            console.log(state)
            console.log(action)
            return action.students

        default:
            console.log(`studentReducer() - default`)
            return state;
    }
}