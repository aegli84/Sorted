import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import Input from './pages/Input'
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/auth">
        <Login />
      </Route>
      <Route path="/input">
        <Input />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
