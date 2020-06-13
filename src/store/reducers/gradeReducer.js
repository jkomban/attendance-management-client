import { GRADE_ACTIONS } from '../actions/grade-action'

export const initialGradeState = []

export const gradeReducer = (state = initialGradeState, action) => {

    switch (action.type) {
        case GRADE_ACTIONS.RETRIEVE_ALL_GRADES:
            return action.data
        case GRADE_ACTIONS.UPDATE_GRADE:
        case GRADE_ACTIONS.ADD_GRADE:
            console.log("----- Grade update/add reducer-----")
            return state
        default:
            return state;
    }
}
