import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'

const randomNumber = () => Math.floor(Math.random() * 827)

const Nav = ({ onSearch }) => {
    return(
        <>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(randomNumber())}>Random</button>
            <Link to={'/about'}><button>About</button></Link>
            <Link to={'/home'}><button>Home</button></Link>
        </>        
    )
}

export default Nav