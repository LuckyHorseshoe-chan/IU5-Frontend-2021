export interface User{
    login: string, 
    avatar_url: string,
    starred: number,
    repos: Array<string>, 
    followers: number,
    following: number,
    public_repos: number,
    created_at: string, 
    updated_at: string
}
export interface showState{
    repositories: Array<string>,
    itemsToShow: number,
    expanded: boolean
}