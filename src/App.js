import './App.css';
import RandomCatThings from './RandomCatThings';
import SavedCatThings from './SavedCatThings';
import NameEnter from './NameEnter';
import Header from './Header'
import {Route} from 'react-router-dom'

function App() {
  return (
    //global állapot => username
    <div className="App">
      <Header/>
      <NameEnter/>
      <Route exact path="/" component={RandomCatThings}></Route>
      <Route path="/saved" component={SavedCatThings}></Route>
    </div>
  );
}
export default App;
