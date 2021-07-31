import './App.css';
import {Route,Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Help from './pages/help/Help';
import Login from './pages/login/Login';
import Signup from "./pages/signup/Signup"
function App() {
  return (
    <main>
          <Switch>
     
    <Route exact path="/" component={Home}>
    <Home />
    </Route>
    <Route exact path="/help" component={Help}>
    <Help />
    </Route>
    <Route exact path="/login" component={Login} />

    <Route exact path="/signup"component={Signup} />
    </Switch>
    </main>
    
  ); 
}

export default App;
