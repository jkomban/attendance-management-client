import { getAllBatches, addBatch as _addBatch, updateBatch as _updateBatch } from '../../services';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const BATCH_ACTIONS = {
    'RETRIEVE_ALL_BATCHES': 'RETRIEVE_ALL_BATCHES',
    'ADD_BATCH': 'ADD_BATCH',
    'UPDATE_BATCH': 'UPDATE_BATCH'
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

const addBatch = (batchDetails, schoolID) => {
    return async (dispatch) => {
        try {
            const data = await _addBatch(batchDetails, schoolID)
            dispatch({ type: BATCH_ACTIONS.ADD_BATCH, data: data })
        } catch (e) {
            console.error(e);
            console.error("batch-actions.addBatch():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in adding batch info', content: e.response } })
        }
    }
}


const updateBatch = (batchDetails, schoolID) => {
    return async (dispatch) => {
        try {
            const data = await _updateBatch(batchDetails, schoolID)
            dispatch({ type: BATCH_ACTIONS.UPDATE_BATCH, data: data })
        } catch (e) {
            console.error(e);
            console.error("batch-actions.updateBatch():: ERROR");
            dispatch({ type: NOTIFICATION_ACTIONS.SEND, data: { message: 'Error in updating batch info', content: e.response } })
        }
    }
}
export { BATCH_ACTIONS, getAllBatchDetails, addBatch, updateBatch }