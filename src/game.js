import Score from '../src/score'

export default class Game {

  constructor(hero, game_width, game_height){
    this.game_width = game_width
    this.game_height = game_height
    this.hero = hero;
    this.paused = false;
    this.running = true;
    this.gameOver = false;
  }

  draw(ctx){
    if(Score.infectionRate >= 1){
      // this.gameOver = true
      // return;
      ctx.fillText("Game Over!", this.game_width / 2, this.game_height - 730);
    }
  }

}
