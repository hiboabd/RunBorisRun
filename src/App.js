import React from 'react';
import Header from './components/header'
import Play from './components/play'
import Home from './components/home'
import Rules from './components/rules'
import About from './components/about'
import ScoreboardDisplay from './components/scoreboard'
// import Scoreboard from './components/scoreboard'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Scoreboard from './scoreboard'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/play" exact component={Play}/>
      <Route path="/rules" exact component={Rules}/>
      <Route path="/about" exact component={About}/>
      {
      // <Route path="/scoreboard" exact component={ScoreboardDisplay}/>
      }
      <Route path="/scoreboard" render={(props) => <ScoreboardDisplay scoreboard={Scoreboard} {...props} />} />
    </Router>
  );
}

export default App;
