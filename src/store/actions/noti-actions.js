const NOTIFICATION_ACTIONS = {
    'SEND': 'SEND'

}


const sendNotification = (type, message) => {
    return async (dispatch) => {
        try {
            const data = { type, message }
            dispatch({ type: NOTIFICATION_ACTIONS.INFO, data: data })
        } catch (e) {
            console.error(e);
            console.error("noti-actions.sendInfoNotification():: ERROR");
        }
    }
}


export { NOTIFICATION_ACTIONS, sendNotification }