import { NOTIFICATION_ACTIONS } from '../actions/noti-actions'

export const initialNotificationState = {
    message: null,
    content: null
}

export const notiReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case NOTIFICATION_ACTIONS.SEND:
            console.log(`INSIDE NOTIFICATION REDEUCER`)
            return { ...state, ...action.data }
        default:
            console.log(`DEFAULT NOTIFICATION REDEUCER`)
            return { ...state, ...initialNotificationState }
    }
}
