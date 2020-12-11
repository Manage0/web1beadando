const SavedCatThings =()=>{return (

    <ul>
            {JSON.parse(localStorage.getItem("karesz")).map((item)=>
        <li>
            {item}
        </li>
    )}
    </ul>
    );}

export default SavedCatThings