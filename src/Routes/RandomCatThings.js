import axios from 'axios'
import { useState,useEffect } from 'react'
import "../catpurr.css"
import "../Css/Button.css"
import { UserNameContext } from "../UsernameContext"

const RandomCatThings =()=>{

    const [selectedFacts, setSelectedFacts]=useState([]);
    const [facts, setFacts]=useState();
    const [loaded, setLoaded]=useState(false);
    const [index, setIndex]=useState(0);
    
   
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
        //írd át, bontsd le
        if(selectedFacts[index]||selectedFacts[index+1]||selectedFacts[index+2]||selectedFacts[index+3]) {
          if(selectedFacts[index]){
            localStorage.setItem(
              'karesz',
              localStorage.getItem('karesz')?
              JSON.stringify(
              [
                ...JSON.parse(localStorage.getItem('karesz')),
                facts.all[index].text
              ])
              :JSON.stringify([facts.all[index].text]));
          }
          if(selectedFacts[index+1]){
            if(selectedFacts[index+1]){
              localStorage.setItem(
                'karesz',
                localStorage.getItem('karesz')?
                JSON.stringify(
                [
                  ...JSON.parse(localStorage.getItem('karesz')),
                  facts.all[index+1].text
                ])
                :JSON.stringify([facts.all[index+1].text]))
          }
        }
          if(selectedFacts[index+2]){
            if(selectedFacts[index+2]){
              localStorage.setItem(
                'karesz',
                localStorage.getItem('karesz')?
                JSON.stringify(
                [
                  ...JSON.parse(localStorage.getItem('karesz')),
                  facts.all[index+2].text
                ])
                :JSON.stringify([facts.all[index+2].text]))
          }
        }
          if(selectedFacts[index+3]){
            if(selectedFacts[index+3]){
              localStorage.setItem(
                'karesz',
                localStorage.getItem('karesz')?
                JSON.stringify(
                [
                  ...JSON.parse(localStorage.getItem('karesz')),
                  facts.all[index+3].text
                ])
                :JSON.stringify([facts.all[index+3].text]))
          }
        }
      }
        else{
            alert("No items selected!");
        }
      }

    return (
        <div className="styleddiv">
            <input type="checkbox" onClick={()=>{selectedFacts[index]?selectedFacts[index]=false:selectedFacts[index]=true}}/>
            {(index+1)+". "+JSON.stringify(facts.all[index].text)}
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index]?selectedFacts[index+1]=false:selectedFacts[index+1]=true}}/>
            {(index+2)+". "+JSON.stringify(facts.all[index+1].text)}
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index]?selectedFacts[index+2]=false:selectedFacts[index+2]=true}}/>
            {(index+3)+". "+JSON.stringify(facts.all[index+2].text)}
            <br/>
            <input type="checkbox" onClick={()=>{selectedFacts[index]?selectedFacts[index+3]=false:selectedFacts[index+3]=true}}/>
            {(index+4)+". "+JSON.stringify(facts.all[index+3].text)}
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