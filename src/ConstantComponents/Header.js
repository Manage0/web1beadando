import { Link } from 'react-router-dom'
import { css } from "styled-components/macro"

const Header = () => {

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
            <Link to='/saved' style={{ textDecoration: 'none' }}>
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