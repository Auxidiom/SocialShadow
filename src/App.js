import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Register from "./components/Register";
import ClearData from "./components/ClearData";
import React, {useState} from 'react';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername]= useState("");


  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
        <Router>
            <Navbar getLogin={loggedIn} setLogin={setLoggedIn}/>
            <Switch>
                <Route exact path="/">
                    <Banner getLogin={loggedIn}/>
                </Route>
                <Route path="/login">
                    <Login setLogin={setLoggedIn}/>
                </Route>
                <Route path="/register">
                    <Register setUsername={setUsername}/>
                </Route>
                <Route path="/cleardata">
                    <ClearData getLogin={loggedIn} username={username}/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
