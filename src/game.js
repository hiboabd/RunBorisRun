import Input from '../src/input'

export default class Game {

  constructor(hero, game_width, game_height){
    this.gameWidth = game_width;
    this.gameHeight = game_height;
    this.hero = hero;
    this.input = new Input
    this.paused = false;
    this.gameOver = false;
  }

  // draw(ctx){
  //   if(this.hero.infectionRate === 1){
  //     // this.gameOver = true
  //     // return;
  //     ctx.fillText("Game Over!", 70, 70);
  //   }
  // }

//
// update(deltaTime){
//
//   if(this.input.paused === true){
//      // || this.gamestate === GAMESTATE.MENU)
//      return;
//    }
// }
//
// togglePause(){
//   // console.log("hey");
//    if(this.input.paused === true){
//      this.paused = true;
//    } else {
//      this.paused = false
//    }
//  }


 draw(ctx){
 ctx.rect(0, 0, this.gameWidth, this.gameHeight);
 ctx.fillStyle = "rgba(0,0,0,0.1)";
 ctx.fill();

  ctx.font = "35px arcadeclassicregular";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight - 730);
  }
}
