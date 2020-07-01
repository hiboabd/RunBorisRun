export default class Scoreboard {


  static board = [0]


  static add(score){
    Scoreboard.board.push(score.toFixed(0))
  }

  static highscore(){
    var sorted = Scoreboard.board.sort()
    var highFirst = sorted.reverse()
    
    localStorage.setItem("score", highFirst[0])
    var highScore = localStorage.getItem("score")
    return highScore
  }



  // static add(score) {
  //     Scoreboard.board.push({name: 'Bill' , score: score})
  //     Scoreboard.sort()
  // }

  // static sort(){
  //   Scoreboard.board.sort(function(a, b){
  //     return b.score - a.score;
  //   });

  //   for (var i = 0; i < Scoreboard.board.length; i++) {
  //     Scoreboard.board[i].rank = i + 1
  //   }
  // }
}
