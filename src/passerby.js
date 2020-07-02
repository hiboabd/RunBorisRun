export default class Passerby {
constructor(image, x_position) {
    this.position = {x: x_position, y: 628}
    this.image = new Image();
    this.image.src = image
    this.SCALE = 4;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH; // 4*16 = 64
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.frameX = 0;
    this.frameY = 2;
    this.CYCLE_LOOP = [0, 1, 0, 2];
    this.increment = 0;
    this.fallSpeed = 0
    // this.SPEED = 2;
  }

  static speed = 2;

  draw(ctx){
    this._fall()
    this._animateSprite()
    return ctx.drawImage(this.image,
      this.frameX * this.WIDTH,
      this.frameY * this.HEIGHT,
      this.WIDTH,
      this.HEIGHT,
      this.position.x,
      this.position.y,
      this.SCALED_WIDTH,
      this.SCALED_HEIGHT);
  }

  _fall(){
    this.position.y += this.fallSpeed
  }

  _animateSprite(){
    if(this.position.x < -110){
      this.position.x = 1600
    }
    if(this.increment > 3){
      this.increment = 0
    } else {
        this.frameX = this.increment.toFixed(0)
        this.frameX = this.CYCLE_LOOP[this.frameX]
        this.increment += 0.1
        this.position.x -= Passerby.speed;
    }
  }

}
