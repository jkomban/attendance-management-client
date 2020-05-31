import { SCHOOL_ACTIONS } from '../actions/school-actions'

export const initialSchoolState = {
    address: { state: {} },
    contact: {}
}

export const schoolReducer = (state = initialSchoolState, action) => {
    // console.log(`SchoolReducer() - state[${JSON.stringify(state)}] action[${JSON.stringify(action)}]`)
    // console.log(SCHOOL_ACTIONS)
    // console.log(action.type);
    switch (action.type) {
        case SCHOOL_ACTIONS.RETRIEVE_SCHOOLS:
            console.log(`INSIDE SCHOOLREDUCER`)
            return { ...state, ...action.data }
        case SCHOOL_ACTIONS.UPDATE_SCHOOLS:
            return state
        case SCHOOL_ACTIONS.EDIT_INFO:
            return { ...state, ...action.data }
        default:
            return state;
    }
}

// export { initialSchoolState }