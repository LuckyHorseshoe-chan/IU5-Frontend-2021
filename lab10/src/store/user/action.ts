import { Dispatch } from "react"

import { User, UserAction, UserActionTypes } from "./types"

export const setUser = (username: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch ({
            type: UserActionTypes.SET_USERNAME,
            payload: username
        })
    }
}


export const fetchUser = (username: string | null) => {
    return function (dispatch: Dispatch<UserAction>) {
        let user : User = {
            login: "no login", 
            avatar_url:"no url",
            starred: 0,
            repos: [], 
            followers: 0,
            following: 0,
            public_repos: 0,
            created_at: "no date", 
            updated_at: "no date"};
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            // const requestHeaders: HeadersInit = new Headers();
            // requestHeaders.set("Authorization", process.env.REACT_APP_API_KEY!);
            // const url = "https://api.github.com/users/" + username;
            // fetch(url, {
            //     headers: requestHeaders
            // })
            const url = "https://api.github.com/users/" + username;
            fetch(url)
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
                    //console.log(json.starred_url.slice(0, -15))
                    fetch(json.starred_url.slice(0, -15))
                    .then((response) => response.json())
                    .then((data) => {
                        user.starred = data.length;
                        fetch(json.repos_url)
                        .then((response) =>  response.json())
                        .then((data) =>{
                            user.repos = data.map((val : any) => val.name);
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