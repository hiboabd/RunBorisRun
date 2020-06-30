export default class Passerby {
constructor() {
    this.position = {x: 1400, y: 730}
    this.image = new Image();
    this.image.src = "./assets/old_sprite.png"
    this.SCALE = 4;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH; // 4*16 = 64
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.frameX = 0;
    this.frameY = 2;
    this.CYCLE_LOOP = [0, 1, 0, 2];
    this.increment = 0;
    this.SPEED = 2;
  }

  animateSprite(hero){
    if(this.position.x < -110){
      this.position.x = 1600
    }

    if(this.increment > 3){
      this.increment = 0
    } else if(hero.position.x <= 15 && this.position.x <= 106){
        this.position.x = 106
        this.frameX = this.increment.toFixed(0)
        this.frameX = this.CYCLE_LOOP[this.frameX]
        this.increment += 0.1
    } else {
        this.frameX = this.increment.toFixed(0)
        this.frameX = this.CYCLE_LOOP[this.frameX]
        this.increment += 0.1
        this.position.x -= this.SPEED;
    }
}

  draw(ctx){
    ctx.fillRect((this.position.x - 42), (this.position.y - 30), 150, 150);

    // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
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

}
