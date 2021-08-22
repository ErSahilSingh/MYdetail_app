import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <>
      
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route>
        <Errorpage/>
      </Route>
      </Switch>
     
    </>
  )
}

export default App;
