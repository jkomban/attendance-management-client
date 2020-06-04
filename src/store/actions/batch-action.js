import { getAllBatches } from '../../services';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const BATCH_ACTIONS = {
    'RETRIEVE_ALL_BATCHES': 'RETRIEVE_ALL_BATCHES'
}

const getAllBatchDetails = (schoolID) => {
    return async (dispatch) => {
        try {
            const data = await getAllBatches(schoolID)
            dispatch({ type: BATCH_ACTIONS.RETRIEVE_ALL_BATCHES, data: data })
        } catch (e) {
            console.error(e);
            console.error("batch-actions.getAllFacilityDetail():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in fetching batch info', content: e.response } })
        }
    }
}

export { BATCH_ACTIONS, getAllBatchDetails }