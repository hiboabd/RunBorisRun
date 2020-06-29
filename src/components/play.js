import React from 'react';

function Play(){
  return(
    <div className="play">
      <center>
        <canvas id="gameScreen" width="1500" height="800"></canvas>
      </center>
      <img id="sprite" src="./assets/sprite.png" alt="hero"/>
    </div>
  )
}

export default Play
