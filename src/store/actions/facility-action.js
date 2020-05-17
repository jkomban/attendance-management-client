import { getAllFacilityDetails } from '../../services';
const FACILITY_ACTIONS = {
    'RETRIEVE_ALL_FACILITY': 'RETRIEVE_ALL_FACILITY',
    'ADD_ALL_FACILITY': 'ADD_ALL_FACILITY',
    'UPDATE_ALL_FACILITY': 'UPDATE_ALL_FACILITY',
    'DELETE_ALL_FACILITY': 'DELETE_ALL_FACILITY',
    'EDIT_INFO': 'EDIT_INFO'
}

const getAllFacilityDetail = () => {
    return async (dispatch) => {
        try {
            const data = await getAllFacilityDetails()
            dispatch({ type: FACILITY_ACTIONS.RETRIEVE_ALL_FACILITY, data: data })
        } catch (e) {
            console.error(e);
            console.error("facility-actions.getAllFacilityDetail():: ERROR");
            // dispatch({ type: FACILITY_ACTIONS.RETRIEVE_ALL_FACILITY, ALL_FACILITY: data })
        }
    }
}

export { FACILITY_ACTIONS, getAllFacilityDetail }