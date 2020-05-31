import { AUTH_ACTIONS } from '../actions/auth-actions'

export const initalAuthState = {
}

export default (state = initalAuthState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.USN_PASS_LOGIN:
            return { ...state, ...action.data };
        case AUTH_ACTIONS.USER_LOGOUT:
            return initalAuthState;
        case AUTH_ACTIONS.USER_SIGNUP:
            return initalAuthState;
        default:
            return state;
    }
};