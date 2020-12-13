import { useContext, useEffect, useState } from "react"
import { css } from "styled-components/macro"
import "../Css/Button.css"
import { UserNameContext } from "../Contexts_Reducers/UsernameContext"

const NameEnter = () => {
    const { ChangeUsername, username } = useContext(UserNameContext)
    const [welcomeTitle, setWelcomeTitle] = useState(`Welcome, please enter your name!`);
    const [inputText, setInputText] = useState();

    useEffect(() => {
        if (username)
            setWelcomeTitle(`Welcome, ${username}!`)
    }, [username])

    return (
        <div>
            <div css={css`
        width: 100%;
        background-color: lightblue;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 0px;
        margin-bottom: 0px;
      `}>
                <h3>{welcomeTitle}</h3>
            </div>
            <div css={css`
        width: 100%;
        background-color: lightblue;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 0px;
      `}>
                <input value={inputText} onChange={(event) => { setInputText(event.target.value); }} />
            </div>
            <div css={css`
                width: 100%;
                background-color: lightblue;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-top: 0px;
                padding-top: 5px;
                padding-bottom: 5px;
            `}>
                <button variant='primary' className="button" onClick={() => { ChangeUsername(inputText) }}><h4>Save Username</h4></button>
            </div>
        </div>
    );
}

export default NameEnter