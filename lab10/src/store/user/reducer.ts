import {UserAction, UserState, UserActionTypes} from "./types";

const initialState = {
    user: null,
    username: '',
    loading: false,
    error: null
}

export const userReducer = (state: UserState = initialState, action: UserAction) : UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USERNAME:
            return {user: null, username: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USER:
            return {...state, loading: true, error: null, user: null};
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload};
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, loading: false, error: action.payload, user: null};
        default:
            return state;
    }
}