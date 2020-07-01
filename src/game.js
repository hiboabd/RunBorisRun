export default class Game {

  constructor(hero){
    this.hero = hero;
    this.paused = false;
    this.running = true;
    this.gameOver = false;
  }

  draw(ctx){
    if(this.hero.infectionRate === 1){
      // this.gameOver = true
      // return;
      ctx.fillText("Game Over!", 70, 70);
    }
  }
}
