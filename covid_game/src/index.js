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

var refresh = function() {
  ctx.clearRect(0, 0, 800, 600);
  hero.draw(ctx)
};

var loop = function() {
  hero.airBorne()
  detectCollision.hitBottom()
  refresh()
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
