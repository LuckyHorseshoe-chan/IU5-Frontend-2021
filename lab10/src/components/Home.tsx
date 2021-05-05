import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks";

const Home: React.FC = () => {
    const searchInput = useRef<HTMLInputElement>(null);
  //  const searchButton = useRef<SVGSVGElement>(null);
    const {setUser} = useActions()
    const history = useHistory()

    function handleClick() {
        setUser(searchInput!.current!.value)
        history.push("/search")
    }

    function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            handleClick();
        }
    }
    return(
        <div>
            <button className="home">Home</button>
            <div className="search-panel">
                <input 
                className="search-string" 
                ref={searchInput}
                placeholder="Enter the GitHub nickname" 
                onKeyPress={onKeyPress}
                />
                <button className="search-button" onClick={handleClick} >Search</button>
            </div>
        </div>
    );
}

export default Home;