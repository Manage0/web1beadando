import { useContext, useEffect, useState } from "react"
import { css } from "styled-components/macro"
import "../Css/Button.css"
import "../Css/Input.css"
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
        justify-content: space-evenly;
      `}>
            <div css={css`
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      `}>
                <h3>{welcomeTitle}</h3>
                <input type="search" placeholder="Your name..." value={inputText} border="50px" onChange={(event) => { setInputText(event.target.value); }} />
            </div> 
            </div>
            <div css={css`
        width: 100%;
        background-color: lightblue;
        padding-bottom: 8px;
      `}>
            <button variant='primary' className="button" onClick={() => { ChangeUsername(inputText) }}><h4>Save Username</h4></button>    
            </div>
        </div>
    );
}

export default NameEnter