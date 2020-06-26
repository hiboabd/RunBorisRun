export default class Hero {
constructor() {
    this.SPEED = 10
    this.position = { x: 50, y: 730 }
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
    this.SCALE = 3;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.frameX = 0;
    this.frameY = 3;
    this.isMoving = false;
    this.CYCLE_LOOP = [0, 1, 0, 2];
    this.increment = 1
  }
  moveRight() {
    this.isMoving = true
    this.frameY = 3
    this.position.x += this.SPEED;
    this.animateSprite()
  }
  /// Test that frameY is now 3
  //Test that isMovind = true

  moveLeft() {
    this.isMoving = true
    this.frameY = 2
    this.position.x -= this.SPEED;
    this.animateSprite()
  }

  animateSprite(){
    if(this.isMoving){
        this.frameX = this.increment
        this.frameX = this.CYCLE_LOOP[this.increment]
      if(this.increment === 3){
        this.increment = 0
      }else{
        this.increment ++
      }
    }
  }

  stopped(){
    this.frameX = 0
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
    ctx.drawImage(this.image, this.frameX * this.WIDTH, this.frameY * this.HEIGHT, this.WIDTH, this.HEIGHT, this.position.x, this.position.y, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }
}

// add a key up
