import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './background'
import Hero from '../src/hero'
import Input from '../src/input'
import Score from '../src/score'
// import Platform from '../src/platform'
import DetectCollision from '../src/detectCollision'
// import Game from './game'
import SFX from '../src/sfx'
import SpawnObjects from '../src/spawnObjects'
import Levels from './levels';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let canvas = document.getElementById("gameScreen");
// only loads the canvas if the id "gamescreen" has been found
if (canvas != null){
  let ctx = canvas.getContext("2d");
  ctx.font = "35px arcadeclassicregular";


  var hero = new Hero();
  var levels = new Levels(hero)
  const background = new Background();



// var platforms = [] //Arguements - image, x, y, height, width, movingSpeed:(optional)
// platforms.push(new Platform('./assets/grass_4x1.png', 100, 400, 100, 200, 0.5))
// platforms.push(new Platform('./assets/grass_4x1.png', 600, 200, 100, 200, -0.2))
// platforms.push(new Platform('./assets/grass_4x1.png', 200, 600, 100, 200, -0.2))

var spawnObjects = new SpawnObjects(hero)
spawnObjects.spawn()
// objects = {hero: hero, platforms: platforms}
// var detectCollision = new DetectCollision(objects);
var input = new Input(hero);
var detectCollision = new DetectCollision(hero, spawnObjects.platforms, background, spawnObjects.passerbyFloor, ctx);
var play = new SFX(hero, input)



  document.onkeydown = input.checkKey;
  document.onkeyup = input.checkKey;

  var refresh = function() {
    ctx.clearRect(0, 0, 1500, 800);
    background.draw(ctx)
    hero.draw(ctx);
    ctx.fillStyle = 'grey';
    ctx.fillText("Distance : " + Math.floor(Score.distance) + "m", 10, 60);
    ctx.fillText("Infection Rate : " + Score.infectionRate.toFixed(2), 10, 100);
    spawnObjects.update(ctx);
  };

  var loop = function() {

    play.gameSFX()
    play.gameMusic()
    hero.airBorne()
    detectCollision.levelUp()
    detectCollision.hitBottom()
    detectCollision.hitEdge()
    detectCollision.hitPasserby()
    detectCollision.hitPlatform()

    input.movePlayer()
    refresh()
    window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);
}
