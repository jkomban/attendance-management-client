
// import fakeAuth from '../services/auth/fakeAuth'

export default function authenticate(user, pass) {
    // dispatch function reference is used to trigger the state change and re-render of components
    return async (dispatch, getState) => {
        let state = getState()
        console.log(`login-action:authenticate() - current State ${JSON.stringify(state)}`)
        try {
            // const response = await fakeAuth.authenticate(user, pass)
            const response = { userid: 'John doe' }
            const result = loginSuccess(state, response)
            console.log(`auth-action:loginSuccess() - returned ${JSON.stringify(result)}`)
            return dispatch(result)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

function loginSuccess(state, response) {
    console.log(`auth-action:loginSuccess() - `)
    return {
        type: 'LOGIN',
        credentials: response
    }
}