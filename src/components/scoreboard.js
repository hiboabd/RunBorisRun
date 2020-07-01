import React from 'react';
import Scoreboard from '../scoreboard'

function ScoreboardDisplay() {
  return(
    <div>
      <center>
        <h1> Scoreboard </h1>
        <h2> Name - Score </h2>
        {for (var i = 0; i < Scoreboard.board.length; i++)}
          <p>{Scoreboard.board[i].name} - {Scoreboard.board[i].score}</p>
         }
        }

      </center>
    </div>
  )
}

export default ScoreboardDisplay
