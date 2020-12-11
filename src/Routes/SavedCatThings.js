import { UserNameContext } from "../UsernameContext"
import {useReducer, useContext} from "react"
import {usernameReducer} from "../usernameReducer"


const SavedCatThings =()=>{
    
const { username } = useContext(UserNameContext)
const [state, dispatch] = useReducer(usernameReducer, username);
    return (
        <div>
            <button variant="primary" onClick={()=>dispatch({type: 'capitalize'})}>
                Click here to see your name written with uppercase letters!
            </button>
            <br/>
            {state.username}
            <ul>
            {JSON.parse(localStorage.getItem(username)).map((item)=>
        <li>
            {item}
        </li>
    )}
    </ul>
    </div>
    
    );}

export default SavedCatThings