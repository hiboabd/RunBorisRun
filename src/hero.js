export default class Hero {
constructor() {
    this.SPEED = 2
    this.position = { x: 50, y: 730 }
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
    this.SCALE = 4;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.frameX = 0;
    this.frameY = 3;
    this.isMoving = false;
    this.CYCLE_LOOP = [0, 1, 0, 2];
    this.increment = 0
    this.jumping = false; 
    this.jumpSpeed = -15; 
    this.GRAVITY = 0.2
  }
  moveRight() {
    // var myVar = setInterval(this.myTimer, 1000);
    this.isMoving = true
    this.frameY = 3
    this.position.x += this.SPEED;
    this.animateSprite()
  }

  // myTimer(){
  //  return this.animateSprite();
  // }
  /// Test that frameY is now 3
  //Test that isMovind = true

  moveLeft() {
    this.isMoving = true
    this.frameY = 2
    this.position.x -= this.SPEED;
    this.animateSprite()
  }

  animateSprite(){
    // eslint-disable-next-line
   if(this.jumping == true){
     this.frameX = 1
  } else {
      if(this.isMoving){
        this.frameX = this.increment.toFixed(0)
        this.frameX = this.CYCLE_LOOP[this.frameX]
      if (this.increment > 3){
        this.increment = 0
      } else {
        this.increment += 0.1
        }
     }
  }
}

  jump = () => {
    this.jumpSpeed = -10;
    this.jumping = true;
  }

  airBorne = () => {
    if (this.jumping) {
      this.position.y += this.jumpSpeed;
      this.jumpSpeed += this.GRAVITY;
    }
  }

  draw(ctx){
    return ctx.drawImage(this.image, this.frameX * this.WIDTH, this.frameY * this.HEIGHT, this.WIDTH, this.HEIGHT, this.position.x, this.position.y, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }
}
