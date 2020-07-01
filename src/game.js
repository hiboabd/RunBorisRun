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
    if(Score.infectionRate >= 1 || this.hero.position.y === 730){
    this.gameOver = true
    this.displayText(ctx)
    }
  }

  displayText(ctx){
    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fill();
    ctx.font = "35px arcadeclassicregular";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", this.game_width / 2, this.game_height - 600);
  }
}
