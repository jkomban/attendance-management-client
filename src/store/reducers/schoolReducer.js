import { SCHOOL_ACTIONS } from '../actions/school-actions'

const initialSchoolState = {}

export default (state = initialSchoolState, action) => {
    // console.log(`SchoolReducer() - state[${JSON.stringify(state)}] action[${JSON.stringify(action)}]`)
    switch (action.type) {
        case SCHOOL_ACTIONS.RETRIEVE_STUDENTS:
            console.log(state)
            console.log(action)
            return state

        case SCHOOL_ACTIONS.ADD_SCHOOLS:
            console.log(state)
            console.log(action.students)
            if (action.students instanceof Error) {
                return state
            } else {
                return action.students
            }


        default:
            console.log(`SchoolReducer() - default`)
            console.log(state);
            return state;
    }
}