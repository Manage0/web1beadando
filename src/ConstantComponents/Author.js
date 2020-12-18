import { useState } from "react"
import "../Css/ArrowedBtn.css"

const AuthorNfo=()=>{
    const [show,setShow]=useState(false);

    const Show=()=>{
        if(show){
            return(
                <div>
                    <br/>
                    Made by Benedek Jakab
                    <br/>
                    University of Sopron - Simonyi Karoly Faculty of Engineering, Wood Sciences and Applied Arts
                    <br/>
                    <a href="https://github.com/Manage0/web1beadando" >
                        <h1>
                            Source Code available here
                        </h1>
                    </a>
                </div>
            );
        }
        return null
    }

    return(
        <div>
            <button variant="secondary" className="aButton" onClick={()=>setShow(!show)} >
                <h4>
                    <span>
                        Show developer
                    </span>
                </h4>
            </button>
            {Show()}
        </div>)
}

export default AuthorNfo