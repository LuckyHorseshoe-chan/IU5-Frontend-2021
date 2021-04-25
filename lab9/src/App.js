import './App.css';
import Home from './components/Home.js'
import Search from './components/Search.js'
import React from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {
  const [username, setUsername] = React.useState('');
  const [starred, setStarred] = React.useState('0');
  const [repositories, setRepositories] = React.useState([]);
  const [avatar_url, setAvatarUrl] = React.useState('');
  const [following, setFollowing] = React.useState('0');
  const [public_repos, setPublicRepos] = React.useState('0');
  const [followers, setFollowers] = React.useState('0');
  const [created_at, setCreated] = React.useState(''); 
  const [updated_at, setUpdated] = React.useState('');
  // const [user, setUser] = React.useState(
  // {login: "", 
  // avatar_url:"https://avatars.githubusercontent.com/u/23740415?v=4",
  // starred: "0", 
  // followers: "0",
  // following: "0",
  // public_repos: "0",
  // created_at: "2016-11-25T13:06:58Z", 
  // updated_at: "2021-04-18T22:44:07Z"
  // });
  const [temp, setTemp] = React.useState(false)
  const getUsername = (event) => {
    //console.log("event.target.value: " + event.target.value);
    setUsername(event.target.value);
   // console.log("getUsername, username: " + username);
    // setUser(
    //   {login: event.target.value, 
    //     avatar_url:"https://avatars.githubusercontent.com/u/23740415?v=4",
    //     starred: "0", 
    //     followers: "0",
    //     following: "0",
    //     public_repos: "0",
    //     created_at: "2016-11-25T13:06:58Z", 
    //     updated_at: "2021-04-18T22:44:07Z"}
    //   );
  }
  const pressEnter = (event) => {
    if (event.code.toLowerCase() === 'enter') { 
      setTemp(true);
      //console.log('enter press here! ');
      // let history = useHistory();
      // history.push("/search");
    };
  }
  useEffect(() => {
    let url ='https://api.github.com/users/'
  // console.log(url + username)
   //console.log('user.login: ' + user.login)
  // console.log(typeof user.login)
    fetch(url + username)
    .then((response) => {
      //console.log(response.json().toString());
      //return response.text();
      return response.json();
    })
    //.then((text) => console.log(text))
    .then((data) => {
     // console.log(data);
      return data;
    })
    .then((data) => {
      //
      if(data.avatar_url === undefined){
        //console.log('user doesn\'t exist');
        setUsername("not_found")
        //setUser({login: "not_found"})
        // setUser(
        //   {login: "not_found", 
        // avatar_url:"https://avatars.githubusercontent.com/u/23740415?v=4",
        // starred: "0", 
        // followers: "0",
        // following: "0",
        // public_repos: "0",
        // created_at: "2016-11-25T13:06:58Z", 
        // updated_at: "2021-04-18T22:44:07Z"})
        // console.log("setted login: " + user.login)
        return;
       // return <ShowErr/>;
      }
     // console.log("user exists");
      //console.log(starred)
      fetch(data.starred_url.slice(0, -15))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       // console.log(data);
       // console.log(data.length)
       //console.log(starred)
        setStarred(data.length);
       // console.log("starred: " + starred);
        return;
      });
      fetch(data.repos_url)
        .then((response) => {
          return response.json();
        })
        .then((data) =>{
          setRepositories(data);
          //console.log("repositories: ");
          //console.log(repositories);
          return;
      });
      setAvatarUrl(data.avatar_url);
      setFollowing(data.following);
      setPublicRepos(data.public_repos);
      setFollowers(data.followers);
      setCreated(data.created_at); 
      setUpdated(data.updated_at);
      //alert("starred: " + starred)
      // console.log(data.avatar_url)
      // let starred_response = await fetch(data.starred_url.slice(0, -15));
      // let starred_data = await starred_response.json();
      // console.log(starred_data);
      // setUser({login: "data.login", 
      // avatar_url: data.avatar_url,
      // starred: starred, 
      // followers: data.followers,
      // following: data.following,
      // public_repos: data.public_repos,
      // created_at: data.created_at, 
      // updated_at: data.updated_at
      // })
      //console.log("user exists, setted login: " + username)
    });
    // .catch((err) =>{
    //   console.log('user doesn\'t exist');
   });
  
  
  return (
    <Router>
      <div className="App">
        <Link className="home" to="/" onClick={() => {setTemp(false)}}>Home</Link>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search 
            username={username}
            starred={starred}
            repos={repositories}
            avatar_url={avatar_url} 
            following={following}
            public_repos={public_repos}
            followers={followers}
            created_at={created_at} 
            updated_at={updated_at}
            />
          </Route>
          <Route path="/">
            <Home onChange={getUsername} onKeyPress={pressEnter} temp={temp}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
