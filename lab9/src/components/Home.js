import {
    Link,
    useHistory 
  } from "react-router-dom";
function Home({onChange, onKeyPress, temp}) {
    let history = useHistory();
    if({temp}.temp){
      console.log('Yes');
      history.push("/search");
    }
    return (
      <div className="search-panel">
        <input 
        className="search-string" 
        onChange={onChange} 
        placeholder="Enter the GitHub nickname" 
        onKeyPress={onKeyPress}
        />
        <Link to="/search">
          <button className="search-button" >Search</button>
        </Link>
      </div>
    );
  }
  export default Home