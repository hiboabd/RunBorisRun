import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './background'
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
const background = new Background()

window.onload = function() {

  background.draw(ctx)
  hero.draw(ctx);
}

var input = new Input(hero);
var detectCollision = new DetectCollision(hero);
var input = new Input(hero, ctx, background);

document.onkeydown = input.checkKey;
document.onkeyup = input.checkKey;

var refresh = function() {
  ctx.clearRect(0, 0, 1500, 800);
  background.draw(ctx);
  hero.draw(ctx)
};

var loop = function() {
  hero.airBorne()
  detectCollision.hitBottom()
  detectCollision.hitEdge()
  input.movePlayer()
  refresh()
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
