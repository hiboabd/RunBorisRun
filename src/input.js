export default class Input {
  constructor(hero, game){
    this.hero = hero;
    this.game = game;
    this.up = false;
    this.left = false;
    this.right = false;
    this.keyUp = false;
    this.muted = false
    this.history =[]
    this.paused = false
  }

  checkKey = (e) => {
      e = e || window.event

      var key_state = (e.type === "keydown")?true:false;

      switch(e.keyCode){
        default:
          // this.keyUp = true;
        break;
        case 39: // right key
          this.right = key_state;
        break;
        case 37: //left key
          this.left = key_state;
        break;
        case 38: // up key
          this.up = key_state;
        break;
        case 32: // up key
          this.muted = false;
        break;
        case 77: // up key
          this.muted = true
        break;
        case 27:
        this.paused = true
        break;
        case 82:
        this.paused = false
        break;

      }
    };



  movePlayer = () => {
    if (this.right) { this.hero.moveRight();  }
    if (this.left)  { this.hero.moveLeft();}
    if (this.up) {
      if (this.hero.jumping === false) { this.hero.jump() }
    // } if (this.m === true && this.muted === false) {this.muted = true}
    // if (this.m === true && this.muted === true) {this.muted = false}
    // if (this.keyUp) { this.hero.frameX = 0 }
    }
  }

  //
  // togglePause = () => {
  //  if (this.paused) {
  //    this.paused = false;
  //   } else {
  //     this.paused = true
  //   }
  // }
}
