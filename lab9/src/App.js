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
  const [user, setUser] = React.useState(
  {login: "no login", 
  avatar_url:"no url",
  starred: "0",
  repos: [], 
  followers: "0",
  following: "0",
  public_repos: "0",
  created_at: "no date", 
  updated_at: "no date"
  });
  const [temp, setTemp] = React.useState(false)
  const getUsername = (event) => {
    setUser(
      {login: event.target.value, 
        starred: user.starred,
        repos: user.repos,
        avatar_url: user.avatar_url,
        following: user.following,
        public_repos: user.public_repos,
        followers: user.followers,
        created_at: user.created_at, 
        updated_at: user.updated_at}
      );
  }
  const pressEnter = (event) => {
    if (event.code.toLowerCase() === 'enter') { 
      setTemp(true);
    };
  }
  useEffect(() => {
    let url ='https://api.github.com/users/'
    // fetch(url + user.login, { 
    //   headers: {
    //     'Authorization': `Token ${process.env.REACT_APP_API_KEY}`
    //   }
    // })
    fetch(url + user.login, { 
        Authorization: `Token ${process.env.REACT_APP_API_KEY1}`
      })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      if(data.avatar_url === undefined){
        console.log('user doesn\'t exist');
        user.login = "not_found";
        return;
      }
      fetch(data.starred_url.slice(0, -15), { 
        Authorization: `Token ${process.env.REACT_APP_API_KEY1}`
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        user.starred = data.length;
        return;
      });
      fetch(data.repos_url, { 
        Authorization: `Token ${process.env.REACT_APP_API_KEY1}`
      })
        .then((response) => {
          return response.json();
        })
        .then((data) =>{
          user.repos = data;
          return;
      });
      user.public_repos = data.public_repos;
      user.avatar_url = data.avatar_url;
      user.followers = data.followers;
      user.following = data.following;
      user.created_at = data.created_at;
      user.updated_at = data.updated_at;
    });
   }, [user]);
  
  
  return (
    <Router>
      <div className="App">
        <Link className="home" to="/" onClick={() => {setTemp(false)}}>Home</Link>
        <Switch>
          <Route path="/search">
            <Search user={user}/>
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
