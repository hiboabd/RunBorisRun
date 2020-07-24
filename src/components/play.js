import React from 'react';

function Play(){
  return(
    <div className="play">
      <center>
        <canvas id="gameScreen" width="1500" height="800"></canvas>
      </center>
      <div>
        <form action="/addscore" method="get" >
          <input type="submit" name="submit" value="Save Your Score"/>
        </form>
      </div>
    </div>
  )
}

export default Play
