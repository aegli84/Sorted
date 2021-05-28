import './App.css';
import GlobalStyles from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import Task from './pages/Task';
import Login from './pages/Login';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Switch>
      <Route exact path="/auth">
        <Login />
      </Route>
      <Route path="/task">
        <Task/>
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
    </>
  );
  
}

export default App;
