import drawFrame from './sprite_movement.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import Hero from '../src/hero'
import Input from '../src/input'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");
export default ctx;

var hero = new Hero();
hero.draw(ctx);

var input = new Input(hero, ctx);

document.onkeydown = input.checkKey;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
