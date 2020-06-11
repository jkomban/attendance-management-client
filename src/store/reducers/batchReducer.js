import { BATCH_ACTIONS } from '../actions/batch-action'

export const initialBatchState = []

export const batchReducer = (state = initialBatchState, action) => {

    switch (action.type) {
        case BATCH_ACTIONS.RETRIEVE_ALL_BATCHES:
            return action.data
        case BATCH_ACTIONS.ADD_BATCH:
        case BATCH_ACTIONS.UPDATE_BATCH:
            console.log("||||||||||||||")
            return state
        default:
            return state;
    }
}
