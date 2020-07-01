import Scoreboard from './scoreboard'
import Score from '../src/score'


export default class Game {

  constructor(hero, game_width, game_height, input){
    this.game_width = game_width
    this.game_height = game_height
    this.hero = hero;
    this.paused = false;
    this.gameOver = false;
    this.input = input
  }

  draw(ctx, canvas){
  if(Score.infectionRate >= 1 || this.hero.position.y === 730){
    this.gameOver = true
    Scoreboard.add(Score.distance);
    Game.restart(canvas, this.hero, ctx)
  }else if (this.input.paused === true){
    this.paused = true;
  } else {this.paused = false}
  this.gameStateText(ctx);
  }

  gameStateText(ctx){
    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fill();
    ctx.font = "35px arcadeclassicregular";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    if (this.gameOver){
      ctx.fillText("Game Over", this.game_width / 2, this.game_height - 600);
      console.log()
    } else if (this.paused){
      ctx.fillText("Paused", this.game_width / 2, this.game_height - 600);
    } else if (this.paused === false){
      ctx.fillText("", this.game_width / 2, this.game_height - 600);
    }
  }

  static restart(canvas, hero, ctx){
      function getMousePos(canvas, event) {
        var canvas_1 = document.getElementById("gameScreen");
        var rect = canvas_1.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    //Function to check whether a point is inside a rectangle
    function isInside(pos, rect){
        return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
    }

    //The rectangle should have x,y,width,height properties
    var rect = {
        x:0,
        y:0,
        width:200,
        height:100
    };
    //Binding the click event on the canvas
    document.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
    
        if (isInside(mousePos,rect)) {
          Game.reset(hero)
          hero.draw(ctx)
        }else{
          console.log("BOOP")
        }   
    }, false);
  }

  static reset = (hero)=> {
    Score.distance = 0
    Score.infectionRate = 0
    // this.hero.position.x = 50 
    // this.hero.position.y = 630
    this.gameOver = false;
    console.log(hero) // undefined
    hero.position.x = 50
    hero.position.y = 630

  }
}
