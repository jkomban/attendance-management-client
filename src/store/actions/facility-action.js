import { getAllFacilityDetails, addFacility as _addFacility, updateFacility as _updateFacility } from '../../services';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const FACILITY_ACTIONS = {
    'RETRIEVE_ALL_FACILITY': 'RETRIEVE_ALL_FACILITY',
    'ADD_FACILITY': 'ADD_FACILITY',
    'UPDATE_FACILITY': 'UPDATE_FACILITY',
    'DELETE_FACILITY': 'DELETE_FACILITY',
}

const getAllFacilityDetail = (schoolID) => {
    return async (dispatch) => {
        try {
            const data = await getAllFacilityDetails(schoolID)
            dispatch({ type: FACILITY_ACTIONS.RETRIEVE_ALL_FACILITY, data: data })
        } catch (e) {
            console.error(e);
            console.error("facility-actions.getAllFacilityDetail():: ERROR");
            // dispatch({ type: FACILITY_ACTIONS.RETRIEVE_ALL_FACILITY, ALL_FACILITY: data })
        }
    }
}

const addFacility = (facilityDetails) => {
    return async (dispatch) => {
        try {
            const data = await _addFacility(facilityDetails)
            dispatch({ type: FACILITY_ACTIONS.ADD_FACILITY, data: data })
        } catch (e) {
            console.error(e);
            console.error("facility-actions.addFacility():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in adding Facility info', content: e.response } })
        }
    }
}

const updateFacility = (facilityDetails) => {
    return async (dispatch) => {
        try {
            const data = await _updateFacility(facilityDetails)
            dispatch({ type: FACILITY_ACTIONS.UPDATE_FACILITY, data: data })
        } catch (e) {
            console.error(e);
            console.error("facility-actions.updateFacility():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in updating Facility info', content: e.response } })
        }
    }
}

export { FACILITY_ACTIONS, getAllFacilityDetail, addFacility, updateFacility }