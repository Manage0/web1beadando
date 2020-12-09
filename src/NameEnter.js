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
                <input  value={inputText}  onChange={(event) => {    setInputText(event.target.value);  }}/> 
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
                <button variant='primary' onClick={()=>{NameSetup(inputText)}}><h4>Save Username</h4></button>    
            </div>
        </div>
    );
}

export default NameEnter