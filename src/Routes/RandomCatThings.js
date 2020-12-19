import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import "../Css/Button.css"
import { UserNameContext } from "../Contexts_Reducers/UsernameContext"

const RandomCatThings = () => {

  var selectedFacts=[]
  const [facts, setFacts] = useState();
  const [APIisBack, setAPIisBack] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const { username } = useContext(UserNameContext)

  useEffect(() => {
    const load = async () => {
      try {
        const resp = await axios(
          "https://jsonplaceholder.typicode.com/todos/"
        )
        setFacts(resp.data)
        setLoaded(true)
      } catch (err) {
        console.log(err)
      }
      try { 
        await axios(
          "https://cat-fact.herokuapp.com/facts"
        )
        setAPIisBack(true)
      } catch (err) {
        console.log(err)
      }
    }

    if (!loaded) {
      load()
    }
  }, [loaded])
  if (!loaded) {
    return (<h5>You will see the facts here!</h5>)
  }

  const SaveSelected=(selected)=>{
    const actualItem=localStorage.getItem(username)
    if (selectedFacts[selected]) {
      localStorage.setItem(
        username,
        actualItem ?
          JSON.stringify(
            [
              ...JSON.parse(actualItem),
              facts[selected].title
            ])
          : JSON.stringify([facts[selected].title]));
    }
  }

  const Save = () => {
    if (username) {
      if (selectedFacts[index] || selectedFacts[index + 1] || selectedFacts[index + 2] || selectedFacts[index + 3]) {
        SaveSelected(index)
        SaveSelected(index+1)
        SaveSelected(index+2)
        SaveSelected(index+3)
      }
      else {
        alert("No items selected!");
      }
    }
    else {
      alert("No username set!");
    }
  }

  return (
    <div className="styleddiv">
      These aren't cat facts, because the original API crashed :(
      <br />
      {APIisBack ? "API is back online! :)" : "API still not working :("}
      <br />
      <input type="checkbox" onChange={() => { selectedFacts[index] ? selectedFacts[index] = false : selectedFacts[index] = true }} />
      {(index + 1) + ". " + JSON.stringify(facts[index].title)}
      <br />
      <input type="checkbox" onChange={() => { selectedFacts[index + 1] ? selectedFacts[index + 1] = false : selectedFacts[index + 1] = true }} />
      {(index + 2) + ". " + JSON.stringify(facts[index + 1].title)}
      <br />
      <input type="checkbox" onChange={() => { selectedFacts[index + 2] ? selectedFacts[index + 2] = false : selectedFacts[index + 2] = true }} />
      {(index + 3) + ". " + JSON.stringify(facts[index + 2].title)}
      <br />
      <input type="checkbox" onChange={() => { selectedFacts[index + 3] ? selectedFacts[index + 3] = false : selectedFacts[index + 3] = true }} />
      {(index + 4) + ". " + JSON.stringify(facts[index + 3].title)}
      <br />
      <div className="styleddiv">
        <button variant='primary' className="button" onClick={() => { index >= 4 ? setIndex(index - 4) : setIndex(index) }}>
          {index >= 4 ? <h4>Previous {index - 3}-{index}</h4> : <h4>No previous available</h4>}</button>
        <button variant='primary' className="button" onClick={() => { setIndex(index + 4) }}><h4>Next {index + 5}-{index + 8}</h4></button>
        <br />
      </div>
      <div className="styleddiv">
        <button variant='primary' className="button" onClick={() => { Save() }}><h4>Save Selected items</h4></button>
      </div>
    </div>
  );
}

export default RandomCatThings