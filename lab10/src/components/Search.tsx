import GithubProfile from './GithubProfile'
import {User} from '../store/content/types'


interface propsFromState {
    user: User;
}
  
type AllProps = propsFromState;

const Search: React.FC<AllProps> = ({user}) => {
    if(({user}.user.login) === 'not_found'){  
        return <ShowErr/>
    }
    return <GithubProfile user={user}/>
}
const ShowErr: React.FC = () => {
    return(
        <h1 className="error-text">User doesn't exist</h1>
    );
}

export default Search;