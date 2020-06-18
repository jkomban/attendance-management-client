import { FACILITY_ACTIONS } from '../actions/facility-action'

export const initialFacilityState = []

export const facilityReducer = (state = initialFacilityState, action) => {

    switch (action.type) {
        case FACILITY_ACTIONS.RETRIEVE_ALL_FACILITY:
            // console.log(action.data)
            return action.data;
        case FACILITY_ACTIONS.ADD_FACILITY:
        case FACILITY_ACTIONS.UPDATE_FACILITY:
            console.log("||||||||||||||")
            return state
        default:
            return state;
    }
}
