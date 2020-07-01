import React from 'react';
import Scoreboard from '../scoreboard'


class ScoreboardDisplay extends React.Component {

  // iteration = () => {

  //   var increment = (Object.keys(Scoreboard.board).length)

  //   for (var i = 0; i < Scoreboard.board.length; i++) {
  //     var name = Scoreboard.board[i].name
  //     var score = Scoreboard.board[i].score

  //     increment ++

  //     return name + " - " + score
  //   }


  render() {
    return (
       <div>

          <center>
            {Scoreboard.sort()}
            {Scoreboard.board.map((item)=><p>{item.rank}: {item.name} - {item.score}</p>)}
          </center>

       </div>
    );
  }
}

//   render() {
//     return (
//       <center>
//         <div class="commentBox">
//           <p> {this.iteration()} </p>
//         </div>
//       </center>

//     )
//   }
// }

export default ScoreboardDisplay
