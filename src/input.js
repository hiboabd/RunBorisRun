export default class Input {
  constructor(hero){
    this.hero = hero;
    this.up = false;
    this.left = false;
    this.right = false;
  }

  checkKey = (e) => {
      e = e || window.event

      var key_state = (e.type === "keydown")?true:false;

      switch(e.keyCode){
        default:
          console.log('wrong key pressed');
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
    if (this.right) {
      this.hero.isMoving = true
      this.hero.moveRight()
    } else if (this.left){
      this.hero.moveLeft()
    } else if (this.up){
      if (this.hero.jumping === false) { this.hero.jump() }
    } else {
      this.hero.isMoving = false
      this.hero.frameX = 0;
    }
  }
}
