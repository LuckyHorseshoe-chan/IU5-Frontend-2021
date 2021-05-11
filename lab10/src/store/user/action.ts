import { Dispatch } from "react"


import { showState, User, UserAction, UserActionTypes } from "./types"

export const setUser = (username: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch ({
            type: UserActionTypes.SET_USERNAME,
            payload: username
        });
    }
}

export const setShowMore = (user : User) => {
    return (dispatch: Dispatch<UserAction>) =>{
        const itemsToShow = Math.min(8, user.repos.length);
        user.show_more_button.itemsToShow === 8 ? (
            user.show_more_button = { repositories: user.show_more_button.repositories, itemsToShow: user.show_more_button.repositories.length, expanded: true }
          ) : (
            user.show_more_button = { repositories: user.show_more_button.repositories, itemsToShow: itemsToShow, expanded: false }
          )
        dispatch({
            type: UserActionTypes.CHANGE_SHOW_STATE,
            payload: user
        });
    }
}

export const fetchUser = (username: string | null) => {
    return function (dispatch: Dispatch<UserAction>) {
        const init_SM_button : showState = {
            repositories: [],
            itemsToShow: 0,
            expanded: false
        };
        let user : User = {
            login: "no login", 
            avatar_url:"no url",
            starred: 0,
            repos: [], 
            followers: 0,
            following: 0,
            public_repos: 0,
            created_at: "no date", 
            updated_at: "no date",
            show_more_button: init_SM_button
        };
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const requestHeaders: HeadersInit = new Headers();
            requestHeaders.set("Authorization", process.env.REACT_APP_API_KEY1!);
            const url = "https://api.github.com/users/" + username;
            fetch(url, {
                headers: requestHeaders
            })
            .then((response)=>response.json())
            .then((json)=> {
                if (json.message === "Not Found") {
                    dispatch({
                        type: UserActionTypes.FETCH_USER_ERROR,
                        payload: "User doesn't exist"
                    })
                } else {
                    user.login = json.login;
                    user.avatar_url = json.avatar_url;
                    user.followers = json.followers;
                    user.following = json.following;
                    user.public_repos = json.public_repos;
                    user.created_at = json.created_at; 
                    user.updated_at = json.updated_at;
                    fetch(json.starred_url.slice(0, -15), {
                        headers: requestHeaders
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        user.starred = data.length;
                        fetch(json.repos_url, {
                            headers: requestHeaders
                        })
                        .then((response) =>  response.json())
                        .then((data) =>{
                            user.repos = data.map((val : any) => val.name);
                            const itemsToShow = Math.min(8, user.repos.length);
                            user.show_more_button = {
                                repositories: user.repos,
                                itemsToShow: itemsToShow,
                                expanded: false
                            }
                            dispatch({
                                type: UserActionTypes.FETCH_USER_SUCCESS,
                                payload: user
                            })
                        });
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: UserActionTypes.FETCH_USER_ERROR,
                    payload: "Error while loading user"
                }) 
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: "Error while loading user"
            })            
        }
    }
}