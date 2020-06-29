export default class Hero {
constructor() {
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
    this.increment = 0;
    this.jumping = false;
    this.jumpSpeed = -15;
    this.GRAVITY = 0.17
    this.jumpingDirection = [];
    this._setSize()
    this._setImage()
    this._setFrames()
    this._setPhysics()
  }

  moveRight() {
    this.frameY = 3
    this.position.x += this.SPEED;
    this.scoreUp()
    this.animateSprite()
  }

  moveLeft() {
    this.frameY = 2
    this.position.x -= this.SPEED;
    this.animateSprite()
  }

  animateSprite(){
   if(this.jumping === true) { this.frameX = 1 } else {
      this.frameX = this.CYCLE_LOOP[this.increment.toFixed(0)]
      this.increment > 3 ? (this.increment = 0) : (this.increment += 0.1)
    }
  }

  jump = () => {
    this.jumpingDirection.push(this.frameY)
    this.jumpSpeed = -15;
    this.jumping = true;
    this.animateSprite()
  }

  airBorne = () => {
    if (this.jumping) { this.position.y += (this.jumpSpeed += this.GRAVITY) }
  }

  draw(ctx){
    this._setSides();
    return ctx.drawImage(this.image,
      this.frameX * this.WIDTH,
      this.frameY * this.HEIGHT,
      this.WIDTH, this.HEIGHT,
      this.position.x,
      this.position.y,
      this.SCALED_WIDTH,
      this.SCALED_HEIGHT);
  }

  scoreUp(){
      this.score += 1 / 60
    }

  infectionRateUp(){
        this.infectionRate += 0.02
      }

  _setSides(){
    this.top    = this.position.y
    this.bottom = this.position.y + this.SCALED_HEIGHT
    this.right  = this.position.x + this.SCALED_WIDTH - 20
    this.left   = this.position.x + 20
  }

  _setImage(){
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
  }

  _setSize(){
    this.SCALE = 1;
    this.WIDTH = 64;
    this.HEIGHT = 72;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
  }

  _setPhysics(){
    this.jumping = false; 
    this.jumpSpeed = -15; 
    this.GRAVITY = 0.5
    this.SPEED = 4
    this.infectionRate = 0;
  }

  _setFrames(){
    this.CYCLE_LOOP = [0, 1, 0, 2];
    this.increment = 0
    this.frameX = 0;
    this.frameY = 3;
    this.score = 0;
  }
}
