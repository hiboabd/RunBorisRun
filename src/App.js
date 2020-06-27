import React from 'react';
import Header from './components/header'
import Play from './components/play'
import Home from './components/home'
import Controls from './components/controls'
import About from './components/about'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/play" exact component={Play}/>
      <Route path="/controls" exact component={Controls}/>
      <Route path="/about" exact component={About}/>
    </Router>
  );
}

export default App;
