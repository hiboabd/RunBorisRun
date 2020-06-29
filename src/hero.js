export default class Hero {
constructor() {
    this.position = { x: 50, y: 730 }

    this._setSize()
    this._setImage()
    this._setFrames()
    this._setPhysics()
  }
  moveRight() {
    this.frameY = 3
    this.position.x += this.SPEED;
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
    this.jumpSpeed = -15;
    this.jumping = true;
    this.animateSprite()
  }

  airBorne = () => {
    if (this.jumping) { this.position.y += (this.jumpSpeed += this.GRAVITY) }
  }

  draw(ctx){
    this._setSides()
    return ctx.drawImage(this.image,
      this.frameX * this.WIDTH,
      this.frameY * this.HEIGHT,
      this.WIDTH, this.HEIGHT,
      this.position.x,
      this.position.y,
      this.SCALED_WIDTH,
      this.SCALED_HEIGHT);
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
  }

  _setFrames(){
    this.CYCLE_LOOP = [0, 1, 0, 2];
    this.increment = 0
    this.frameX = 0;
    this.frameY = 3;
  }
}
