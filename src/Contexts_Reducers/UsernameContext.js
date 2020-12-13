import React, { createContext, useState } from "react";

export const UserNameContext = createContext();
export const UsernameProvider = (props) => {
    const [username, setUsername]=useState();

    const ChangeUsername=(name)=>{
        setUsername(name)
    }

    return(
        <UserNameContext.Provider value={{ChangeUsername, username}} {...props}/>
    );
}
