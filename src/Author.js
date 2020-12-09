import { useState } from "react"
import {css} from "styled-components"

const AuthorNfo=()=>{
    const [show,setShow]=useState(false);

    return(
        <div>
        <button variant="primary" onClick={()=>setShow(!show)}>
        <h4>Show developer</h4>
        </button>
        <div>
            {show? "Made by Benedek Jakab":null}
            <br/>
            {show? "University of Sopron - Simonyi Karoly Faculty of Engineering, Wood Sciences and Applied Arts" :null}
            {show? <a href="https://github.com/Manage0/web1beadando" ><h1>Source Code available here</h1></a>:null}
        </div>
        </div>)
}

export default AuthorNfo