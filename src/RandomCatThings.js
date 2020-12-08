import axios from 'axios'
import { useState,useEffect } from 'react'

const RandomCatThings =()=>{

    const [nfo, setNfo]=useState('You will see the facts here!');
    const [facts, setFacts]=useState([]);
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
        return("Loading facts...")
      }
    return (
        <div>
            <ol>
                <li>
                    {JSON.stringify(facts.all[index].text)}
                </li>
                <li>
                    {JSON.stringify(facts.all[index+1].text)}
                </li>
                <li>
                    {JSON.stringify(facts.all[index+2].text)}
                </li>
                <li>
                    {JSON.stringify(facts.all[index+3].text)}
                </li>
            </ol>
            <button variant='primary' onClick={()=>{setIndex(index-4)}}>{index-1}-{index-5}</button>
            {/*handle negative nums and html danger text*/}
            <button variant='primary' onClick={()=>{setIndex(index+4)}}>{index+1}-{index+5}</button>
        </div>
    );
}

export default RandomCatThings