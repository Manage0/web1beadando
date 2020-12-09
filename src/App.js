import './App.css';
import RandomCatThings from './Routes/RandomCatThings';
import SavedCatThings from './Routes/SavedCatThings';
import CatPic from './Routes/Catpic';
import NameEnter from './NameEnter';
import Header from './Header'
import AuthorNfo from "./Author"
import CatPurr from "./CatPurr"
import {Route, Redirect} from 'react-router-dom'
import {useEffect} from 'react'
//<TitleSetter/>
function App() {

  useEffect(() => {
    document.title = "Ultimate Cat Site"
    }, []);

  return (
    //global állapot => username
    <div className="App">
      <Header/>
      <NameEnter/>
      <Route exact path="/catfacts" component={RandomCatThings}></Route>
      <Route path="/saved" component={SavedCatThings}></Route>
      <Route path="/catpic" component={CatPic}></Route>
      <Redirect path="*" to="/catfacts" />
      <CatPurr/>
      <AuthorNfo/>
    </div>
  );
}
export default App;
