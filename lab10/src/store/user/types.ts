export interface User{
    login: string, 
    avatar_url: string,
    starred: number,
    repos: Array<string>, 
    followers: number,
    following: number,
    public_repos: number,
    created_at: string, 
    updated_at: string,
    show_more_button: showState
}
export interface showState{
    repositories: Array<string>,
    itemsToShow: number,
    expanded: boolean
}
export interface UserState {
    user: any;
    username: string | null;
    loading: boolean;
    error: null | string;    
}

export enum UserActionTypes {
    CHANGE_SHOW_STATE = "CHANGE_SHOW_STATE",
    SET_USERNAME = "SET_USERNAME",
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}
export interface ChangeShowState{
    type: UserActionTypes.CHANGE_SHOW_STATE;
    payload: object;
}
interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: object;
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}
interface SetUsernameAction {
    type: UserActionTypes.SET_USERNAME;
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | SetUsernameAction | ChangeShowState