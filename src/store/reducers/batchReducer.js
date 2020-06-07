import { BATCH_ACTIONS } from '../actions/batch-action'

export const initialBatchState = []

export const batchReducer = (state = initialBatchState, action) => {

    switch (action.type) {
        case BATCH_ACTIONS.RETRIEVE_ALL_BATCHES:
            return action.data
        default:
            return state;
    }
}
