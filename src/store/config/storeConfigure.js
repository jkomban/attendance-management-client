import reduxThunk from 'redux-thunk';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers, { initialStudentsState, initialSchoolState } from '../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    auth: {},
    students: initialStudentsState,
    school: initialSchoolState
}
console.log(initialState)

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        // applyMiddleware(immutableStateInvariant(), reduxThunk)
        composeEnhancers(applyMiddleware(immutableStateInvariant(), reduxThunk))
    );

    return store;
};


const store = configureStore(initialState);
export default store;