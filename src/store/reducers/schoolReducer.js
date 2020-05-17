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
            return { ...state, ...action.data }
        case SCHOOL_ACTIONS.UPDATE_SCHOOLS:
            console.log("School details updated successfully :)")
            return { ...state, ...action.data }
        default:
            return state;
    }
}

// export { initialSchoolState }