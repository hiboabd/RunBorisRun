export default class Input {
  constructor(hero){
    this.hero = hero;
    this.up = false;
    this.left = false;
    this.right = false;
    this.keyUp = false;
    this.muted = false;
    this.paused = false;
    this.history =[]
    this.gameStarted = false;
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
        case 78: // unmute key
          this.muted = false;
        break;
        case 77: // mute key
          this.muted = true;
        break;
        case 80: // pause key
        this.paused = true;
        break;
        case 79: // unpause key
        this.paused = false;
        break;
      }
    };

  movePlayer = () => {
    this.gameStarted = true
    if (this.right) { this.hero.moveRight();  }
    if (this.left)  { this.hero.moveLeft();}
    if (this.up) {
      if (this.hero.jumping === false) { this.hero.jump() }

    // } if (this.m === true && this.muted === false) {this.muted = true}
    // if (this.m === true && this.muted === true) {this.muted = false}
    // if (this.keyUp) { this.hero.frameX = 0 }
    }
  }
}
