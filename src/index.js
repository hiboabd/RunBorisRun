import drawFrame from './sprite_movement.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import Background from './background'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const background = new Background()

window.onload = function() {
  background.draw(ctx)
}