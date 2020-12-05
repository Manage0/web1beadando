import react from 'react'
import {Link} from 'react-router-dom'

const Header= ()=>{
    return(
    <div>
    <Link to='/'>miért nem mennek a routeok?</Link>
    <br/>
    <Link to='/saved'>elmentett stuffi</Link>
    <br/>
    </div>
    )
}

export default Header