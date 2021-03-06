import React from 'react';
import {ReactComponent as Star} from './star.svg'
import {ReactComponent as Followers} from './following-svgrepo-com.svg'

  function GithubProfile({user}){
      const itemsToShow = Math.min(8, user.repos.length);
      const [ShowState, setShowState] = React.useState({
        repositories: user.repos,
        itemsToShow: itemsToShow,
        expanded: false
      });
      function showMore() {
        ShowState.itemsToShow === 8 ? (
          setShowState({ repositories: ShowState.repositories, itemsToShow: ShowState.repositories.length, expanded: true })
        ) : (
          setShowState({ repositories: ShowState.repositories, itemsToShow: itemsToShow, expanded: false })
        )
      }
     const created_date = {user}.user.created_at.slice(0, 10) + " " + {user}.user.created_at.slice(11, 19);
     const updated_date = {user}.user.updated_at.slice(0, 10) + " " + {user}.user.updated_at.slice(11, 19);
      return(
        <div className="main-container">
        <div className="info-block">
          <div className="avatar" style={{background: `url(${user.avatar_url}) 50% 50%`}}></div>
          <h1>{user.login}</h1>
          <button className="follow">Follow</button>
          <div className="characteristics">
            <Followers className='icon'/>
            <p>{user.followers} followers</p>
            <div className="point"></div>
            <p>{user.following} following</p>
            <div className="point"></div>
            <Star className='icon'/>
            <p>{user.starred}</p>
          </div>
          <p>Created at: {created_date} <br/><br/>Updated at: {updated_date}</p>
          
        </div>
        <div className="repo-block">
          <p>Repositories: {user.public_repos}</p> 
          <div className="repo-list">
            {ShowState.repositories.slice(0, ShowState.itemsToShow).map((repa) => 
            <div className="repository">{repa.name}</div>)}
            {ShowState.repositories.length > 8 ?
            (ShowState.itemsToShow % 2 === 0 ?
              <button className="show-more" onClick={showMore}>
                {ShowState.expanded ? (
                  <span>Show less</span>
                ) : (
                  <span>Show more</span>
                )}
              </button>
            : 
            <button className="show-more1" onClick={showMore}>
              {ShowState.expanded ? (
                <span>Show less</span>
              ) : (
                <span>Show more</span>
              )}
            </button>) : <div></div>
            }
            
          </div>
        </div>
        </div>
      );
  }

  export default GithubProfile;