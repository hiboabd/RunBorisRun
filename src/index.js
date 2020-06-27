import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './background'
import Hero from '../src/hero'
import Input from '../src/input'
import Platform from '../src/platform'
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

var platforms = []
platforms.push(new Platform('./assets/grass_4x1.png', 100, 600, 100, 500))
platforms.push(new Platform('./assets/grass_4x1.png', 200, 400, 100, 200))
platforms.push(new Platform('./assets/grass_4x1.png', 50, 200, 100, 300))

var input = new Input(hero);
var detectCollision = new DetectCollision(hero, platforms);

document.onkeydown = input.checkKey;
document.onkeyup = input.checkKey;

var refresh = function() {
  ctx.clearRect(0, 0, 1500, 800);
  background.draw(ctx);
  hero.draw(ctx);
  for (var i = 0; i < platforms.length; i++){ platforms[i].draw(ctx) }
};

var loop = function() {
  hero.airBorne()
  detectCollision.hitBottom()
  detectCollision.hitEdge()
  detectCollision.hitPlatform()
  input.movePlayer()
  refresh()
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
