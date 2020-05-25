import { userNamePassAuthenticate } from '../../services/auth-service';

const AUTH_ACTIONS = {
    'USN_PASS_LOGIN': 'USN_PASS_LOGIN',
}


const authenticate = (request) => {
    // dispatch function reference is used to trigger the state change and re-render of components
    return async (dispatch, getState) => {
        console.log(`login-action:authenticate()`)
        try {
            const response = await userNamePassAuthenticate(request)
            console.log(`auth-action:loginSuccess() - returned ${JSON.stringify(response)}`)
            return dispatch({ type: AUTH_ACTIONS.USN_PASS_LOGIN, data: response })
        } catch (error) {

            // return Promise.reject(error)
            /**
             * TODO
             * Throw error / dispatch erro and handle
             */
        }
    }
}

export { authenticate, AUTH_ACTIONS }