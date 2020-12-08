import {useState} from "react"
import { css } from "styled-components/macro"

const NameEnter =()=>{

const [welcomeTitle, setWelcomeTitle] = useState(`Welcome, please enter your name!`);
const [userName, setUserName] =useState();

const NameSetup=(name)=>{
    setUserName(name);
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
      `}>
            <button variant='primary' onClick={()=>{NameSetup(inputText)}}>Save Username</button>
            <input  value={inputText}  onChange={(event) => {    setInputText(event.target.value);  }}/>
            <div>
            {welcomeTitle}
            </div>
        </div>
    );
}

export default NameEnter