import { Link } from 'react-router-dom'
import { css } from "styled-components/macro"
import { useContext, useState, useEffect } from "react"
import { UserNameContext } from "../Contexts_Reducers/UsernameContext"

const Header = () => {
    const { username } = useContext(UserNameContext)
    const [SavedLink, setSavedLink] = useState("/catfacts");

    useEffect(() => {
        if (username) {
            setSavedLink("/saved")
        }
    }, [username])

    return (
        <div
            css={css`
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                margin-top: 0px;
                background-color: green;
            `}
        >
            <h1>
                Menu
            </h1>
            <Link to='/catfacts' style={{ textDecoration: 'none' }}>
                <h2>
                    Cat facts
                </h2>
            </Link>
            <Link to={SavedLink} onClick={()=> username?{}:alert("No username set!")} style={{ textDecoration: 'none' }}>
                <h2>
                    Saved cat facts
                </h2>
            </Link>
            <Link to='/catpic' style={{ textDecoration: 'none' }}>
                <h2>
                    Picture of a cat
                </h2>
            </Link>
        </div>
    )
}

export default Header