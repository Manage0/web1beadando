import './Css/App.css';
import RandomCatThings from './Routes/RandomCatThings';
import SavedCatThings from './Routes/SavedCatThings';
import CatPic from './Routes/Catpic';
import NameEnter from './ConstantComponents/NameEnter';
import Header from './ConstantComponents/Header'
import AuthorNfo from "./ConstantComponents/Author"
import CatPurr from "./ConstantComponents/CatPurr"
import { Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { UsernameProvider } from './Contexts_Reducers/UsernameContext'

function App() {

  useEffect(() => {
    document.title = "Ultimate Cat Site"
  }, []);

  return (
    <div className="App">
      <UsernameProvider>
        <Header />
        <NameEnter />
        <Route exact path="/catfacts" component={RandomCatThings}></Route>
        <Route path="/saved" component={SavedCatThings}></Route>
        <Route path="/catpic" component={CatPic}></Route>
        <Redirect path="*" to="/catfacts" />
        <CatPurr />
        <AuthorNfo />
      </UsernameProvider>
    </div>
  );
}
export default App;
