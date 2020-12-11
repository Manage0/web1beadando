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
import {UsernameProvider} from './UsernameContext'
//<TitleSetter/>
function App() {

  useEffect(() => {
    document.title = "Ultimate Cat Site"
    }, []);

  return (
    //global állapot => username
    <div className="App">
      <UsernameProvider>
      <Header/>
      <NameEnter/>
      <Route exact path="/catfacts" component={RandomCatThings}></Route>
      <Route path="/saved" component={SavedCatThings}></Route>
      <Route path="/catpic" component={CatPic}></Route>
      <Redirect path="*" to="/catfacts" />
      <CatPurr/>
      <AuthorNfo/>
      </UsernameProvider>
      
    </div>
  );
}
export default App;
