import './App.css'
import BookList from "./features/counter/Booklist";
import Alreadyread from './components/Alreadyread';
import Reading from './components/Reading';
import Toread from './components/Toread';
import Nav from "./components/Nav"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="nav">
      <Nav />
      </div>
      
      <Switch>
        <Route path="/" exact>
          <BookList />
        </Route>
        <Route path="/alredyread">
          <Alreadyread />
        </Route>
        <Route path="/reading">
          <Reading />
        </Route>
        <Route path="/toread">
          <Toread />
        </Route>
      </Switch>
    </div>

  )
}
export default App