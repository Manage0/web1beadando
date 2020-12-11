import { useState } from "react"
import "../Css/Button.css"

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
            <button variant="primary" className="button" onClick={()=>setShow(!show)} >
                <h4>
                    Show developer
                </h4>
            </button>
            {Show()}
        </div>)
}

export default AuthorNfo