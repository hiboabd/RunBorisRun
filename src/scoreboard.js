export default class Scoreboard {

  static board = [{name: 'Gareth', score: 100}, {name: 'Jo', score: 200}, {name: 'Ed', score: 150}]

  static add(score) {
      Scoreboard.board.push(score)
  }
}
