import { userNamePassAuthenticate, logoutUser } from '../../services/auth-service';

const AUTH_ACTIONS = {
    'USN_PASS_LOGIN': 'USN_PASS_LOGIN',
    'USER_LOGOUT': 'USER_LOGOUT'
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

const logout = () => {
    return async (dispatch, getState) => {
        console.log(`login-action:logout()`)
        try {
            await logoutUser()
            console.log(`auth-action:logout() -  completed`)
            return dispatch({ type: AUTH_ACTIONS.USER_LOGOUT, data: {} })
        } catch (error) {
            console.log(`auth-actions.logout():: error`)
            console.error(error)
            // return Promise.reject(error)
            /**
             * TODO
             * Throw error / dispatch erro and handle
             */
        }
    }
}

export { authenticate, logout, AUTH_ACTIONS }