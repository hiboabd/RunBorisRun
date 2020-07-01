import React from 'react';
import Scoreboard from '../scoreboard'


class ScoreboardDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: []
    }

  }

  render() {
    const {scoreboard} = this.props;
    return (
       <div>

          <center>
            {scoreboard.board.map((item)=><p>{item.rank}: {item.name} - {item.score}</p>)}
            {console.log(this.props.scoreboard)}
            {console.log(this.props.scoreboard.board)}
          </center>

       </div>
    );
  }
}



  // blah = () => {
  //    Scoreboard.board.map(item => this.setState() => { return {board: { item.rank: { item.name, item.score }}
  //    )
  // }



  // iteration = () => {

  //   var increment = (Object.keys(Scoreboard.board).length)

  //   for (var i = 0; i < Scoreboard.board.length; i++) {
  //     var name = Scoreboard.board[i].name
  //     var score = Scoreboard.board[i].score

  //     increment ++

  //     return name + " - " + score
  //   }




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
