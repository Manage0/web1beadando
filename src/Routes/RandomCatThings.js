import axios from 'axios'
import { useState,useEffect } from 'react'
import {css} from "styled-components"

const RandomCatThings =()=>{

    const [facts, setFacts]=useState([]);
    const [loaded, setLoaded]=useState(false);
    const [index, setIndex]=useState(0);
    const [save, setSave]=useState(false)
   
    useEffect(() => {
        const load = async () => {
          try {
            const resp = await axios(
              "https://cat-fact.herokuapp.com/facts"
            )
            setFacts(resp.data)
            setLoaded(true)
          } catch (err) {
            console.log(err)
          }
        }
    
        if (!loaded) {
          load()
        }
      }, [])
      if (!loaded) {
        return(<h5>You will see the facts here!</h5>)
      }

      const Save=()=>{
        if(save) {
            console.log("saving")
            console.log(save)
            setSave(false)
        }
        else{
            alert("No items selected!");
        }
      }

      const EnableSelection=()=>{
        setSave(true)
      }
    return (
        <div>
            {(index+1)+". "+JSON.stringify(facts.all[index].text)}
            <br/>
            {(index+2)+". "+JSON.stringify(facts.all[index+1].text)}
            <br/>
            {(index+3)+". "+JSON.stringify(facts.all[index+2].text)}
            <br/>
            {(index+4)+". "+JSON.stringify(facts.all[index+3].text)}
            <br/>
            <button variant='primary' onClick={()=>{index>=4?setIndex(index-4):setIndex(index)}}>
    {index>=4?<h4>Previous {index-3}-{index}</h4>:<h4>No previous available</h4>}</button>
            {/*handle negative nums and html danger text*/}
            <button variant='primary' onClick={()=>{setIndex(index+4)}}><h4>Next {index+5}-{index+8}</h4></button>
            <br/>
            <div
            css={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 0px;
            background-color: green;
          `}>
            <button variant='primary' onClick={()=>{EnableSelection()}}><h4>Select items to save</h4></button>
            <button variant='primary' onClick={()=>{Save()}}><h4>Save Selected items</h4></button>
            </div>
        </div>
    );
}

export default RandomCatThings