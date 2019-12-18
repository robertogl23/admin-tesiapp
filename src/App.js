import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './views/Login'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar'

function App() {

  const [ datauser, setDatauser] = React.useState([])

  const updateState = (d) => {
    setDatauser(d)
  }
  console.log(datauser);
  return (
    <Router>
    <div className="App">
      <Navbar userdata={datauser}/>
      <Switch>
        <Route exact path="/">
          <Login fctUpdate={(d) => updateState(d)}/>
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
