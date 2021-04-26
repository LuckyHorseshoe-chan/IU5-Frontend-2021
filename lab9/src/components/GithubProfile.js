import React from 'react';
import {ReactComponent as Star} from './star.svg'
import {ReactComponent as Followers} from './following-svgrepo-com.svg'

  function GithubProfile(
    {login, 
    avatar_url, 
    following,  
    public_repos, 
    followers, 
    created_at, 
    updated_at, 
    starred, 
    repos}){
      const [ShowState, setShowState] = React.useState({
        repositories: repos,
        itemsToShow: 8,
        expanded: false
      });
      function showMore() {
        ShowState.itemsToShow === 8 ? (
          setShowState({ repositories: ShowState.repositories, itemsToShow: ShowState.repositories.length, expanded: true })
        ) : (
          setShowState({ repositories: ShowState.repositories, itemsToShow: 8, expanded: false })
        )
      }
      //avatar.style.backgroundImage = avatar_url;
      //console.log(typeof {created_at}.created_at)
     let created_date = {created_at}.created_at.slice(0, 10) + " " + {created_at}.created_at.slice(11, 19);
     let updated_date = {updated_at}.updated_at.slice(0, 10) + " " + {updated_at}.updated_at.slice(11, 19);
      return(
        <div className="main-container">
        <div className="info-block">
          <div className="avatar" style={{background: `url(${avatar_url}) 50% 50%`}}></div>
          <h1>{login}</h1>
          <button className="follow">Follow</button>
          <div className="characteristics">
            <Followers className='icon'/>
            <p>{followers} followers</p>
            <div className="point"></div>
            <p>{following} following</p>
            <div className="point"></div>
            <Star className='icon'/>
            <p>{starred}</p>
          </div>
          <p>Created at: {created_date} <br/><br/>Updated at: {updated_date}</p>
          
        </div>
        <div className="repo-block">
          <p>Repositories: {public_repos}</p>
          <div className="repo-list">
            {ShowState.repositories.slice(0, ShowState.itemsToShow).map((repa) => <div className="repository">{repa.name}</div>)}
            <button className="show-more" onClick={showMore}>
            {ShowState.expanded ? (
              <span>Show less</span>
            ) : (
              <span>Show more</span>
            )}
            </button>
          </div>
        </div>
        </div>
      );
  }

  export default GithubProfile;