import GithubProfile from './GithubProfile.js'
function Search({user}){
    if(({user}.user.login) === 'not_found'){  
      return <ShowErr/>
    }
    return <GithubProfile user={user}/>
  }
  function ShowErr(){
    return(
      <h1 className="error-text">User doesn't exist</h1>
    );
  }
  export default Search;