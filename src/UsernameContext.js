import React, { createContext, useEffect, useState } from "react";

export const UserNameContext = createContext();
export const UsernameProvider = (props) => {
    const [username, setUsername]=useState();

    const usernameModifier=(name)=>{
        setUsername(name)
    }

    useEffect(() => {
        setUsername("please enter your name")
        }, []);

    return(
        <UserNameContext.Provider value={{usernameModifier, username}} {...props}/>
    );
}
