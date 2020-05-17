import { FACILITY_ACTIONS } from '../actions/facility-action'

export const initialFacilityState = {
    address: { state: {} },
    contact: {},
    school: {}
}

export const facilityReducer = (state = initialFacilityState, action) => {

    switch (action.type) {
        case FACILITY_ACTIONS.RETRIEVE_ALL_FACILITY:
            return { ...state, ...action.data }
        default:
            return state;
    }
}
