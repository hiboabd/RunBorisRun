import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hero from '../src/hero'
import Input from '../src/input'
import DetectCollision from '../src/detectCollision'

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
var detectCollision = new DetectCollision(hero, ctx);

document.onkeydown = input.checkKey;



var loop = function() {
  hero.airBorne()
  detectCollision.hitBottom()
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
// window.requestAnimationFrame(detectCollision.hitBottom);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
