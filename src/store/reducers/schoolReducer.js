import { SCHOOL_ACTIONS } from '../actions/school-actions'

const initialSchoolState = {
    address: { state: {} },
    contact: {}
}

export default (state = initialSchoolState, action) => {
    // console.log(`SchoolReducer() - state[${JSON.stringify(state)}] action[${JSON.stringify(action)}]`)
    // console.log(SCHOOL_ACTIONS)
    // console.log(action.type);
    switch (action.type) {
        case SCHOOL_ACTIONS.RETRIEVE_SCHOOLS:
            // console.log(state)
            // console.log(action.data)
            // console.log(`Is same? `)
            // console.log(state.address == action.data.address)
            return { ...state, ...action.data }

        default:
            return state;
    }
}

export { initialSchoolState }