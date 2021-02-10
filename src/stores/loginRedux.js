import { createStore } from 'redux';
import {LOGIN_ACTION_TYPE} from './loginActionTypeConstants'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'vietngu',
    storage,
  }

// default state
const defaultState = {
    loggedIn: false
};

// reducer
function login(state = defaultState, action) {
    if (action.type ===LOGIN_ACTION_TYPE.SUCCESSFUL_LOGIN) {
        // bad practice in redux - see redux document on immutability
        // state.loggedIn = action.data;

        // {} create new object
        // copy state into the newly created object
        // assign new value from action.data into the loggedIn
        console.log('Login Reducer receiving action event .............')
        console.log(action);
        const newState =  Object.assign({}, state, { loggedIn: action.data });
        console.log(newState)
        console.log('===============================================')
        return newState;
        // alternative 
        /* return {
            ...state, 
            loggedIn:action.data
        */
    } else  if (action.type === LOGIN_ACTION_TYPE['SUCCESSFUL_LOGOUT']){
        return Object.assign({}, state, { loggedIn: action.data });
    }

    return state;
}

const persistedReducer = persistReducer(persistConfig, login)

// // store


export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor }
}
// // subscribe to dispatch event
// store.subscibe(function () {
//     console.log('state ', store.getState());
// })

// store.dispatch({ type: 'CHANGE_ORIGIN_AMOUNT', data: '300.65' })
// store.dispatch({ type: '' })
// store.dispatch({ type: '' })