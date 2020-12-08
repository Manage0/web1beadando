import {Link} from 'react-router-dom'
import { css } from "styled-components/macro"

const Header= ()=>{
    return(
    <div
    css={css`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        background-color: green;
      `}
    >
        <ul>
        <li>
        <Link to='/'>Random cat things</Link>    
        </li>
        <li>
        <Link to='/saved'>Saved cat things</Link>
        </li>
        </ul>
    </div>
    )
}

export default Header