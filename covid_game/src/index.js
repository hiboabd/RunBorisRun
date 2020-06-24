import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

----------------------------------------------
// ctx.fillRect(20, 20, 100, 100);

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;


var character = new Image();
character.addEventListner("load", gameLoop)
character.src = "../public/assets/sprite.png";

function sprite (options) {

    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    that.render = function () {

      // Draw the animation
      that.context.drawImage(
         that.image,
         0,
         0,
         that.width,
         that.height,
         0,
         0,
         that.width,
         that.height);
  };

    return that;

}

var person = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: character
});

person.render()
