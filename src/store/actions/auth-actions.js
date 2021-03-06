import { userNamePassAuthenticate, logoutUser, signUpUser } from '../../services/auth-service';
import { NOTIFICATION_ACTIONS } from './noti-actions'
const AUTH_ACTIONS = {
    'USN_PASS_LOGIN': 'USN_PASS_LOGIN',
    'USER_LOGOUT': 'USER_LOGOUT',
    'USER_SIGNUP': 'USER_SIGNUP'
}


const authenticate = (request) => {
    // dispatch function reference is used to trigger the state change and re-render of components
    return async (dispatch, getState) => {
        console.log(`login-action:authenticate()`)
        try {
            const response = await userNamePassAuthenticate(request)
            console.log(`auth-action:loginSuccess() - returned `)
            dispatch({
                type: NOTIFICATION_ACTIONS.SEND,
                data: { message: 'Successfully Authenticated', content: response }
            })

            return dispatch({ type: AUTH_ACTIONS.USN_PASS_LOGIN, data: response })
        } catch (e) {
            dispatch({
                type: NOTIFICATION_ACTIONS.SEND,
                data: { message: 'Error in signin', content: e.data }
            })
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
        } catch (e) {
            console.log(`auth-actions.logout():: error`)
            dispatch({
                type: NOTIFICATION_ACTIONS.SEND,
                data: { message: e.response.data.message || 'Logout Error', content: e.data }
            })
        }
    }
}

const signUp = (request) => {
    return async (dispatch, getState) => {
        console.log(`login-action:signUp()`)
        try {
            const response = await signUpUser(request)
            console.log(`auth-action:signUp() -  completed`)
            console.log(response)
            dispatch({
                type: NOTIFICATION_ACTIONS.SEND,
                data: { message: response.success, content: response }
            })
            return dispatch({ type: AUTH_ACTIONS.USER_SIGNUP, data: response })
        } catch (e) {
            console.log(`auth-actions.signUp():: error`)
            console.log(e)
            dispatch({
                type: NOTIFICATION_ACTIONS.SEND,
                data: { message: 'Error signing up', content: e.data }
            })
        }
    }
}

export { authenticate, logout, signUp, AUTH_ACTIONS }