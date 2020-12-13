import { UserNameContext } from "../Contexts_Reducers/UsernameContext"
import { useContext } from "react"

const DataFromLocalStorage = () => {
    const { username } = useContext(UserNameContext)
    return (
        <ul>
            {JSON.parse(localStorage.getItem(username)).map((item) =>
                <li>
                    {item}
                </li>
            )}
        </ul>
    )
}

export default DataFromLocalStorage