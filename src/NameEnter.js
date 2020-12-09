import {useState} from "react"
import { css } from "styled-components/macro"

const NameEnter =()=>{

const [welcomeTitle, setWelcomeTitle] = useState(`Welcome, please enter your name!`);
//const [userName, setUserName] =useState();

const NameSetup=(name)=>{
    //setUserName(name);
    //contextbe mentés
    if(name!==undefined)
    setWelcomeTitle(`Welcome, ${name}!`)
}

const [inputText, setInputText]= useState();

    return (
        <div
        css={css`
        width: 100%;
        background-color: lightblue;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 0px;
        height: 70px;
      `}>
            <div>
                <h3>{welcomeTitle}</h3>
            </div>
            <input  value={inputText}  onChange={(event) => {    setInputText(event.target.value);  }}/>
            <button variant='primary' onClick={()=>{NameSetup(inputText)}}><h4>Save Username</h4></button>
        </div>
    );
}

export default NameEnter