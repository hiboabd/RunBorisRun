export default class Scoreboard {


  static board = [{name: 'Gareth', score: 100}, {name: 'Jo', score: 200}, {name: 'Ed', score: 150}]

  static add(score) {
      Scoreboard.board.push({name: 'Bill' , score: score})
      Scoreboard.sort()
  }

  static sort(){
    Scoreboard.board.sort(function(a, b){
      return b.score - a.score;
    });

    for (var i = 0; i < Scoreboard.board.length; i++) {
      Scoreboard.board[i].rank = i + 1
    }
  }
}
