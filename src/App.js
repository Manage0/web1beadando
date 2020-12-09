import './App.css';
import RandomCatThings from './Routes/RandomCatThings';
import SavedCatThings from './Routes/SavedCatThings';
import CatPic from './Routes/Catpic';
import NameEnter from './NameEnter';
import Header from './Header'
import {Route, Redirect, Link} from 'react-router-dom'

function App() {
  return (
    //global állapot => username
    <div className="App">
      <Header/>
      <NameEnter/>
      <Route exact path="/catfacts" component={RandomCatThings}></Route>
      <Route path="/saved" component={SavedCatThings}></Route>
      <Route path="/catpic" component={CatPic}></Route>
      <Redirect path="*" to="/catfacts" />
      <a href="https://github.com/Manage0/web1beadando">Source Code available here</a>
    </div>
  );
}
export default App;
