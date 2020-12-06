import react, {useState} from "react"

const NameEnter =()=>{

const [welcomeTitle, setWelcomeTitle] = useState(`Welcome, please enter your name!`);

const NameSetup=(name)=>{
    if(name!==undefined)
    setWelcomeTitle(`Welcome, ${name}!`)
}

const [inputText, setInputText]= useState();

    return (
        <div>
            <button variant='primary' onClick={()=>{NameSetup(inputText)}}>Save Username</button>
            <input  value={inputText}  onChange={(event) => {    setInputText(event.target.value);  }}/>
            <div>
            {welcomeTitle}
            </div>
        </div>
    );
}

export default NameEnter