import React, { createContext, useReducer, useState } from "react";

export const UserNameContext = createContext();
export const UsernameProvider = (props) => {
    const [username, setUsername]=useState();

    const usernameModifier=(props)=>{
        setUsername(props)
    }
}
