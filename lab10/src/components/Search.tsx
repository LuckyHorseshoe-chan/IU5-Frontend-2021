import GithubProfile from './GithubProfile'
import {useHistory} from "react-router-dom"
import { useTypedSelector, useActions } from "../hooks";
import { useCallback, useEffect } from "react";
//import {User} from '../store/user/types'


// interface propsFromState {
//     user: User;
// }
  
// type AllProps = propsFromState;

const Search: React.FC = () => {
    const {user, username, loading, error} = useTypedSelector(state => state.user)
    const {fetchUser} = useActions()

    const history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const memo = useCallback(() => fetchUser(username), [username])

    useEffect(() => {
        memo();
    }, [])

    if (loading) {
        return  <h1 className="error-text">Loading...</h1>
    }
    if (error) {
        return  (
            <div>
                <button className="home" onClick={handleClick}>Home</button>
                <h1 className="error-text">{error}</h1>
            </div>
        );
    }
    if (!user) {
        return (
            <div>
                <button className="home" onClick={handleClick}>Home</button>
                <h1 className="error-text">Error while loading user</h1>
            </div>
        );
    }
    return (
        <div>
            <button className="home" onClick={handleClick}>Home</button>
            <GithubProfile user={user}/>
        </div>
    );
}
// const ShowErr: React.FC = () => {
//     return(
//         <h1 className="error-text">User doesn't exist</h1>
//     );
// }

export default Search;