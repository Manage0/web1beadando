import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import "../Css/Button.css"
import { UserNameContext } from "../UsernameContext"

const RandomCatThings =()=>{

    const [selectedFacts, setSelectedFacts]=useState([]);
    const [facts, setFacts]=useState();
    const [loaded, setLoaded]=useState(false);
    const [index, setIndex]=useState(0);
    const { username } = useContext(UserNameContext)
   
    useEffect(() => {
        const load = async () => {
          try {
            const resp = await axios(
              "https://jsonplaceholder.typicode.com/todos/"
              //original API: https://cat-fact.herokuapp.com/facts
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
        //írd át, bontsd le
        if(selectedFacts[index]||selectedFacts[index+1]||selectedFacts[index+2]||selectedFacts[index+3]) {
          if(selectedFacts[index]){
            localStorage.setItem(
              username,
              localStorage.getItem(username)?
              JSON.stringify(
              [
                ...JSON.parse(localStorage.getItem(username)),
                facts[index].title
              ])
              :JSON.stringify([facts[index].title]));
          }
          if(selectedFacts[index+1]){
            if(selectedFacts[index+1]){
              localStorage.setItem(
                username,
                localStorage.getItem(username)?
                JSON.stringify(
                [
                  ...JSON.parse(localStorage.getItem(username)),
                  facts[index+1].title
                ])
                :JSON.stringify([facts[index+1].title]))
          }
        }
          if(selectedFacts[index+2]){
            if(selectedFacts[index+2]){
              localStorage.setItem(
                username,
                localStorage.getItem(username)?
                JSON.stringify(
                [
                  ...JSON.parse(localStorage.getItem(username)),
                  facts[index+2].title
                ])
                :JSON.stringify([facts[index+2].title]))
          }
        }
          if(selectedFacts[index+3]){
            if(selectedFacts[index+3]){
              localStorage.setItem(
                username,
                localStorage.getItem(username)?
                JSON.stringify(
                [
                  ...JSON.parse(localStorage.getItem(username)),
                  facts[index+3].title
                ])
                :JSON.stringify([facts[index+3].title]))
          }
        }
      }
        else{
            alert("No items selected!");
        }
      }

    return (
        <div className="styleddiv">
            These aren't cat facts, because the API crashed :( 
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index]?selectedFacts[index]=false:selectedFacts[index]=true}}/>
            {(index+1)+". "+JSON.stringify(facts[index].title)}
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index+1]?selectedFacts[index+1]=false:selectedFacts[index+1]=true}}/>
            {(index+2)+". "+JSON.stringify(facts[index+1].title)}
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index+2]?selectedFacts[index+2]=false:selectedFacts[index+2]=true}}/>
            {(index+3)+". "+JSON.stringify(facts[index+2].title)}
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index+3]?selectedFacts[index+3]=false:selectedFacts[index+3]=true}}/>
            {(index+4)+". "+JSON.stringify(facts[index+3].title)}
            <br/>
            <div className="styleddiv">
            <button variant='primary' className="button" onClick={()=>{index>=4?setIndex(index-4):setIndex(index)}}>
            {index>=4?<h4>Previous {index-3}-{index}</h4>:<h4>No previous available</h4>}</button>
            {/*handle negative nums and html danger text*/}
            <button variant='primary' className="button" onClick={()=>{setIndex(index+4)}}><h4>Next {index+5}-{index+8}</h4></button>
            <br/>
            </div>
            <div className="styleddiv">
            <button variant='primary' className="button" onClick={()=>{Save()}}><h4>Save Selected items</h4></button>
            </div>
        </div>
    );
    }

export default RandomCatThings