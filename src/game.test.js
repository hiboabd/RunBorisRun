import Score from '../src/score'
import SFX from '../src/sfx'
import Game from '../src/game'


describe('Game', () => {

  test('game over status from the outset', () => {
    const game = new Game
    expect(game.gameOver).toEqual(false);
  })

  test('pause status from the outset', () => {
    const game = new Game
    expect(game.paused).toEqual(false);
  })
//
//   test('if infection rate exceeds 1, game over changes to true', () => {
//     const game = new Game()
//     const score = new Score()
//
//     // score.infectionRate = 1
// // use mock to change gameOver
//     expect(game.gameOver).toEqual(true);
//   })

});
