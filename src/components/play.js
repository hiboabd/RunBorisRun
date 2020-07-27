import React from 'react';
import { useState } from 'react';

function Play(){

  const [score, setScore] = useState(0);

  const importScore = () => {
    var scoreGame = document.getElementById("score")
    var score = scoreGame.innerHTML
    var numberScore = parseFloat(score)
    setScore(numberScore)
  }

  return(
    <div className="play">
      <center>
        <canvas id="gameScreen" width="1500" height="800"></canvas>
      </center>
      <div>
      <p>You clicked {score} times</p>
        <button onClick={importScore}>
        Submit Score
        </button>
        <div id="score">Score </div>
      </div>
    </div>
  )
}



export default Play
