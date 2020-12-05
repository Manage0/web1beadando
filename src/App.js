import './App.css';
import RandomCatThings from './RandomCatThings';
import SavedCatThings from './SavedCatThings';
import Header from './Header'
import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={RandomCatThings}></Route>
      <Route path="/saved" component={SavedCatThings}></Route>
    </div>
  );
}
export default App;
