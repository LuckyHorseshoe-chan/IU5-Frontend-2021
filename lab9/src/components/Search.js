import GithubProfile from './GithubProfile.js'
function Search({
    username, 
    avatar_url, 
    following,
    starred,  
    public_repos,
    repos, 
    followers, 
    created_at, 
    updated_at
  }){
    //console.log(typeof {username}.username)
    //console.log("search: " + {username}.username)
    if(({username}.username) === 'not_found'){  
      return <ShowErr/>
    }
    // return <GithubProfile
    // login="Crusader727" 
    // avatar_url="https://avatars.githubusercontent.com/u/23740415?v=4" 
    // followers_url="https://api.github.com/users/Crusader727/followers" 
    // starred_url="https://api.github.com/users/Crusader727/starred{/owner}{/repo}" 
    // repos_url="https://api.github.com/users/Crusader727/repos" 
    // public_repos="30" 
    // followers="9" 
    // following="0"
    // created_at="2016-11-25T13:06:58Z" 
    // updated_at="2021-04-18T22:44:07Z"
    // />
    return <GithubProfile
    login={username} 
    avatar_url={avatar_url}  
    starred={starred} 
    repos={repos} 
    public_repos={public_repos} 
    followers={followers} 
    following={following}
    created_at={created_at} 
    updated_at={updated_at}
    />
  }
  function ShowErr(){
    return(
      <h1 className="error-text">User doesn't exist</h1>
    );
  }
  export default Search;