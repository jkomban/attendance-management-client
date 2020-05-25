import { AUTH_ACTIONS } from '../actions/auth-actions'

export const initalAuthState = {
}

export default (state = initalAuthState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.USN_PASS_LOGIN:
            console.log("authReducer.js")
            console.log(action.data)
            return { ...state, ...action.data };
        default:
            return state;
    }
};