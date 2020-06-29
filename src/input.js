export default class Input {
  constructor(hero){
    this.hero = hero;
    this.up = false;
    this.left = false;
    this.right = false;
    this.keyUp = false;
    this.history = []
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
      }
    };

  movePlayer = () => {
    if (this.right) { this.hero.moveRight(); this.history.push('r'); }
    if (this.left)  { this.hero.moveLeft(); this.history.push('l');}
    if (this.up) {
      if (this.hero.jumping === false) { this.hero.jump() }
    }
    // if (this.keyUp) { this.hero.frameX = 0 }
  }
}
