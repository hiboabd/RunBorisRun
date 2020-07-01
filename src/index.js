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
import Game from './game'
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

  const GAME_WIDTH = 1500
  const GAME_HEIGHT = 800


  var hero = new Hero();
  var levels = new Levels(hero)
  const background = new Background();
  var input = new Input(hero);
  var game = new Game(hero, GAME_WIDTH, GAME_HEIGHT, input);


  var spawnObjects = new SpawnObjects(hero)
  spawnObjects.spawn()


  var detectCollision = new DetectCollision(hero, spawnObjects.platforms, background, spawnObjects.passerbyFloor, ctx);
  var play = new SFX(hero, input)



  document.onkeydown = input.checkKey;
  document.onkeyup = input.checkKey;

  var refresh = function() {
    ctx.clearRect(0, 0, 1500, 800);
    background.draw(ctx)
    hero.draw(ctx);
    game.draw(ctx)
    ctx.fillStyle = 'grey';
    ctx.fillText("Distance : " + Math.floor(Score.distance) + "m", 120, 60);
    ctx.fillText("Infection Rate : " + Score.infectionRate.toFixed(2), 180, 100);
    spawnObjects.update(ctx);
  };

  var loop = function() {

    if (game.gameOver === false){
      if (Game.paused === false){
          console.log(Game.paused)
        play.gameSFX()
        play.gameMusic()
        hero.airBorne()
        detectCollision.levelUp()
        detectCollision.hitBottom()
        detectCollision.hitEdge()
        detectCollision.hitPasserby()
        detectCollision.hitPlatform()
        input.movePlayer()
        game.draw(ctx)
        refresh()
        window.requestAnimationFrame(loop);
      } else if (Game.paused){
        console.log('in else condition')
        console.log(Game.paused)
        game.draw(ctx)
      }

    } else {
      game.draw(ctx)
    }
  }

    window.requestAnimationFrame(loop);
}
