import { Link } from 'react-router-dom'
import { css } from "styled-components/macro"
import { useContext, useState, useEffect } from "react"
import { UserNameContext } from "../Contexts_Reducers/UsernameContext"
import "../Css/Logo.css"

const Header = () => {
    const { username } = useContext(UserNameContext)
    const [SavedLink, setSavedLink] = useState("/catfacts");

    useEffect(() => {
        if (username) {
            setSavedLink("/saved")
        }
    }, [username])

    const logoSrc="https://cnet3.cbsistatic.com/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg"

    //divcss

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
            <Link to='/catfacts' style={{ textDecoration: 'none' }}>
            <img src={logoSrc} alt="A cat" width="120" height="90" type="image/webp" loading="lazy"></img>
                <h1>
                    Ultimate Cat Site
                </h1>
            </Link>
            <Link to='/catfacts' style={{ textDecoration: 'none' }}>
                <h2>
                    Cat facts
                </h2>
            </Link>
            <Link to={SavedLink} onClick={() => username ? {} : alert("No username set!")} style={{ textDecoration: 'none' }}>
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