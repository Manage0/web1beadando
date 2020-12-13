import { UserNameContext } from "../Contexts_Reducers/UsernameContext"
import { useReducer, useContext} from "react"
import { usernameReducer } from "../Contexts_Reducers/usernameReducer"
import DataFromLocalStorage from "../Helpers/DataFromLocalStorage"


const SavedCatThings = () => {

    const { username } = useContext(UserNameContext)
    const UsernameObject={
        username: username
    }
    const [state, dispatch] = useReducer(usernameReducer, UsernameObject);
    
    return (
        <div>
            <button variant="primary" onClick={() => dispatch({type: 'capitalize' })}>
                Click here to see your name written with uppercase letters!
            </button>
            <button variant="primary" onClick={() => dispatch({type: 'delete' })}>
                Click here to delete all your data!
            </button>
            <br />
            Your Name: {state.username}
            <br />
            {localStorage.getItem(username) ? <DataFromLocalStorage /> : "You didn't save any facts yet :/"}
        </div>

    );
}

export default SavedCatThings