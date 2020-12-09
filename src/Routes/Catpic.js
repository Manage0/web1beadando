import { useState } from "react";

const CatPic =()=>{

    const [loaded,setLoaded]=useState(false)
    
    if(!loaded)
    return (
    <div>
        <b>Pics of cats will be here!</b>
    </div>   
    );}

export default CatPic;