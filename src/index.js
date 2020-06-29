import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './background'
import Hero from '../src/hero'
import Input from '../src/input'
import Platform from '../src/platform'
import DetectCollision from '../src/detectCollision'
import SFX from '../src/sfx'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

export default ctx;

var hero = new Hero();
const background = new Background()

var platforms = [] //Arguements - image, x, y, height, width, movingSpeed:(optional)
platforms.push(new Platform('./assets/grass_4x1.png', 100, 400, 100, 200, 0.5))
platforms.push(new Platform('./assets/grass_4x1.png', 600, 200, 100, 200, -0.2))
platforms.push(new Platform('./assets/grass_4x1.png', 200, 600, 100, 200, -0.2))

var input = new Input(hero);
var detectCollision = new DetectCollision(hero, platforms);
var play = new SFX(hero, input)

document.onkeydown = input.checkKey;
document.onkeyup = input.checkKey;

var refresh = function() {
  ctx.clearRect(0, 0, 1500, 800);
  background.moveBackground(hero, input, ctx);
  hero.draw(ctx);
  ctx.fillText("Score : " + Math.floor(hero.score) + "m", 10, 60);
  console.log(hero.score);
  for (var i = 0; i < platforms.length; i++){
    platforms[i].draw(ctx)
    platforms[i].move()
  }
};

var loop = function() {
  play.gameSFX()
  play.gameMusic()
  hero.airBorne()
  detectCollision.hitBottom()
  detectCollision.hitEdge()
  detectCollision.hitPlatform()
  input.movePlayer()
  refresh()
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
